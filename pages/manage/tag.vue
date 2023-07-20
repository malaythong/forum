<template>
    <v-data-table :headers="headers" :items="desserts" sort-by="topic" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title style="color: primary" class="font-weight-black ">ຈັດການຂໍ້ມູນແທັກ</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>

                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary ml-6 font-weight-bold" dark class="mb-2" v-bind="attrs" v-on="on">
                            + ເພີ່ມໃໝ່
                        </v-btn>
                        <v-spacer></v-spacer>
                        <subtitle-1 style="font-size: 14px;"> ຈຳນວນ 50 ແທັກ </subtitle-1>
                    </template>
                    <v-card id="card">
                        <v-row>
                            <v-col class=" d-flex justify-end mr-3 pt-6">
                                <v-icon color="primary" @click="close">
                                    mdi-close
                                </v-icon>
                            </v-col>

                        </v-row>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-row>
                                        <v-col cols="4">
                                            <v-subheader>ລະຫັດແທັກ:</v-subheader>
                                        </v-col>
                                        <v-col cols="8" sm="8" class="mx-auto">
                                            <v-text-field single-line outlined v-model="editedItem.id"
                                                label="0001"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4">
                                            <v-subheader>ຊື່ແທັກ:</v-subheader>
                                        </v-col>
                                        <v-col cols="12" sm="8">
                                            <v-text-field single-line outlined v-model="editedItem.topic"
                                                label="Text"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4">
                                            <v-subheader>ໝວດໝູ່:</v-subheader>
                                        </v-col>
                                        <v-col cols="12" sm="8">
                                            <v-text-field single-line outlined v-model="editedItem.detail"
                                                label="Text"></v-text-field>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-subheader>ລາຍລະອຽດ:</v-subheader>
                                        </v-col>
                                        <v-col cols="12" sm="8">
                                            <v-textarea single-line outlined v-model="editedItem.detail"
                                                label="Text"></v-textarea>
                                        </v-col>
                                        
                                    </v-row>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-col class="d-flex  justify-center">
                                <v-btn color="primary" class="ml-6 font-weight-bold" dark @click="save">
                                    + ເພີ່ມໃໝ່
                                </v-btn>
                            </v-col>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
                Reset
            </v-btn>
        </template>
    </v-data-table>
</template>
<script>
export default {
    data: () => ({
        selectedFile: null,
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'ລະຫັດແທັກ',
                align: 'start',
                sortable: false,
                src: false,
                value: 'tagId',
            },
            { text: 'ຊື່ແທັກ', value: 'tagName' },
            { text: 'ລາຍລະອຽດ', value: 'tagDetail' },
            { text: 'ໝວດໝູ່', value: 'tagCategory' },
            { text: 'ການນຳໃຊ້', value: 'tagUsed' },
            { text: 'ຈັດການ', value: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            tagId: '',
            tagName: '',
            tagDetail: '',
            tagCategory: '',
            tagUsed: 0,
        },
        defaultItem: {
            tagId: '',
            tagName: '',
            tagDetail: '',
            tagCategory: '',
            tagUsed: 0,
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'ເພີ່ມຂໍ້ມູນແທັກ' : 'ແກ້ໄຂຂໍ້ມູນແທັກ'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = [
                {
                    tagId: 't0001',
                    tagName: 'hello',
                    tagDetail: '',
                    tagCategory: 'greeting',
                    tagUsed: 2,
                },
                {
                    tagId: 't0001',
                    tagName: 'hello',
                    tagDetail: '',
                    tagCategory: 'greeting',
                    tagUsed: 2,
                },
                {
                    tagId: 't0001',
                    tagName: 'hello',
                    tagDetail: '',
                    tagCategory: 'greeting',
                    tagUsed: 2,
                },
                {
                    tagId: 't0001',
                    tagName: 'hello',
                    tagDetail: '',
                    tagCategory: 'greeting',
                    tagUsed: 2,
                },
                {
                    tagId: 't0001',
                    tagName: 'hello',
                    tagDetail: '',
                    tagCategory: 'greeting',
                    tagUsed: 2,
                },
            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>
  
<style scoped>
#card {
    overflow-y: hidden;
    overflow-x: hidden;
}</style>