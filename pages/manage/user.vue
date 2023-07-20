<template>
    <v-data-table :headers="headers" :items="desserts" sort-by="topic" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title style="color: primary" class="font-weight-black ">ຈັດການຂໍ້ມູນຜູ້ໃຊ້</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>

                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary ml-6 font-weight-bold" dark class="mb-2" v-bind="attrs" v-on="on">
                            + ເພີ່ມໃໝ່
                        </v-btn>
                        <v-spacer></v-spacer>
                        <subtitle-1 style="font-size: 14px;"> ຈຳນວນ 500 ຄົນ </subtitle-1>
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
                            <v-row>
                                <v-col class=" d-flex justify-center" no-gutters>
                                    <span class="text-h5">ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້</span>
                                </v-col>
                            </v-row>
                        </v-card-title>
                        <v-row>
                            <v-col class=" d-flex justify-center" no-gutters>
                                <div>
                                    <v-avatar size="70" @click="triggerFileInput">
                                        <img v-if="avatar" :src="avatar" alt="Avatar" />
                                        <v-icon v-else size="100">mdi-account-circle</v-icon>
                                    </v-avatar>
                                    <input type="file" ref="fileInput" style="display: none" accept="image/*"
                                        @change="onFileChange" />
                                </div>
                            </v-col>
                        </v-row>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="3" class=" d-flex align-center" no-gutters>
                                        <v-row>
                                            <v-subheader hide-details>ລະຫັດຜູ້ໃຊ້:</v-subheader>
                                        </v-row>

                                    </v-col>
                                    <v-col cols="9" sm="9">
                                        <v-text-field hide-details="auto" single-line outlined></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="3" class=" d-flex align-center" no-gutters>
                                        <v-row>
                                            <v-subheader hide-details>ຊື່ຜູ້ໃຊ້:</v-subheader>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="9" sm="9">
                                        <v-text-field hide-details="auto" single-line outlined></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="3" class=" d-flex align-center" no-gutters>
                                        <v-row>
                                            <v-subheader hide-details>ເພດ:</v-subheader>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="9" sm="9">
                                        <v-radio-group v-model="row" row>
                                            <v-radio label="ຍິງ" value="radio-1"></v-radio>
                                            <v-radio label="ຊາຍ" value="radio-2"></v-radio>
                                            <v-radio label="LGBTQ+" value="radio-2"></v-radio>
                                        </v-radio-group>

                                    </v-col>

                                </v-row>
                                <v-row>
                                    <v-col cols="3" class=" d-flex align-center" no-gutters>
                                        <v-row>
                                            <v-subheader hide-details>ອີເມວ:</v-subheader>
                                        </v-row>

                                    </v-col>
                                    <v-col cols="9" sm="9">
                                        <v-text-field hide-details="auto" single-line outlined></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="3" class=" d-flex align-center" no-gutters>
                                        <v-row>
                                            <v-subheader hide-details>ລະຫັດຜ່ານ:</v-subheader>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="9" sm="9">
                                        <v-text-field hide-details="auto" single-line outlined></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col class="d-flex justify-center ">
                                        <v-btn depressed color="primary" class="mt-12" @click="dialog = false">ຕົກລົງ
                                        </v-btn>
                                    </v-col>
                                </v-row>

                            </v-container>
                        </v-card-text>
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
        <template v-slot:item.profile="{ item }">
            <v-avatar>
                <v-img :src="item.profile" :alt="item.text" max-width="45" max-height="45" />
            </v-avatar>

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
                text: 'ຮູບໂປຣໄຟຣ',
                //   align: 'start',
                //   sortable: false,
                //   src: false,
                value: 'profile',
            },
            { text: 'ລະຫັດສະມາຊຶກ', value: 'userId' },
            { text: 'ຊື່ຜູ້ໃຊ້', value: 'userName' },
            { text: 'ເພດ', value: 'gender' },
            { text: 'ອີເມວ', value: 'email' },
            { text: 'ລະຫັດຜ່ານ', value: 'password' },
            { text: 'ຈັດການ', value: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            profile: '',
            userId: '',
            userName: '',
            gender: '',
            email: '',
            password: '',
        },
        defaultItem: {
            profile: '',
            userId: '',
            userName: '',
            gender: '',
            email: '',
            password: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'ເພີ່ມຂໍ້ມູນຜູ້ໃຊ້' : 'ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້'
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
                    profile: 'https://picsum.photos/id/106/367/267',
                    userId: '0001',
                    userName: 'meme',
                    gender: 'ຍິງ',
                    email: 'meme@mail.com',
                    password: '******',
                },
                {
                    profile: 'https://picsum.photos/id/106/367/267',
                    userId: '0001',
                    userName: 'meme',
                    gender: 'ຍິງ',
                    email: 'meme@mail.com',
                    password: '******',
                },
                {
                    profile: 'https://picsum.photos/id/106/367/267',
                    userId: '0001',
                    userName: 'meme',
                    gender: 'ຍິງ',
                    email: 'meme@mail.com',
                    password: '******',
                },
                {
                    profile: 'https://picsum.photos/id/106/367/267',
                    userId: '0001',
                    userName: 'meme',
                    gender: 'ຍິງ',
                    email: 'meme@mail.com',
                    password: '******',
                },
                {
                    profile: 'https://picsum.photos/id/106/367/267',
                    userId: '0001',
                    userName: 'meme',
                    gender: 'ຍິງ',
                    email: 'meme@mail.com',
                    password: '******',
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
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                this.avatar = e.target.result;
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        },
        close() {
            this.dialog = false
            this.$emit('update:edit_profile', false)
        },
    },
}
</script>
  
<style scoped>
#card {
    overflow-y: hidden;
    overflow-x: hidden;
}
</style>