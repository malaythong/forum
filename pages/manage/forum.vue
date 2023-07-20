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
          <v-card>
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
                  <!-- <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.id" label="id"></v-text-field>
                  </v-col> -->
                  <!-- <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.topic" label="topic"></v-text-field>
                  </v-col> -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-col>
                  <v-row>
                    <v-col cols="3">
                      <v-subheader>ລະຫັດກະທູ້:</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <v-text-field single-line outlined v-model="editedItem.id" label="0001"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-subheader>ຫົວຂໍ້ກະທູ້:</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <v-text-field single-line outlined v-model="editedItem.topic" label="Text"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-subheader>ເນື້ອໃນກະທູ້:</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <v-textarea single-line outlined v-model="editedItem.detail" label="Text"></v-textarea>
                    </v-col>
                    <v-col cols="3">
                      <v-subheader>ຮູບພາບ:</v-subheader>
                    </v-col>
                    <v-col cols="6" md="9" class="d-flex align-center">
                      <input type="file" ref="fileInput" accept="image/*" @change="editedItem.image" />
                    </v-col>
                  </v-row>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary ml-6 font-weight-bold " dark class="mb-2" @click="save">
                + ເພີ່ມໃໝ່
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
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
    <template v-slot:item.image="{ item }">
      <v-img :src="item.image" :alt="item.text" max-width="50" max-height="50" />
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
        text: 'ລະຫັດກະທູ້',
        align: 'start',
        sortable: false,
        src: false,
        value: 'id',
      },
      { text: 'ຫົວຂໍ້ກະທູ້', value: 'topic' },
      { text: 'ລາຍລະອຽດ', value: 'detail' },
      { text: 'ຮູບພາບ', value: 'image' },
      { text: 'ຕອບກັບ', value: 'fat' },
      { text: 'ການອ່ານ', value: 'carbs' },
      { text: 'ຜູ້ສ້າງ', value: 'protein' },
      { text: 'ສ້າງວັນທີ', value: 'carbs' },
      { text: 'ເຄື່ອນໄຫວລ້າສູດ', value: 'protein' },
      { text: 'ຈັດການ', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      topic: '',
      detail: '',
      image: '',
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      id: '',
      topic: '',
      detail: '',
      image: '',
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'ເພີ່ມຂໍ້ມູນກະທູ້' : 'Edit Item'
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
          id: 'Frozen Yogurt',
          topic: 159,
          detail: 'hello',
          image: 'https://picsum.photos/id/103/367/267',
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          id: 'Ice cream sandwich',
          topic: 237,
          detail: 'hello',
          image: 'https://picsum.photos/id/106/367/267',
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          id: 'Eclair',
          topic: 262,
          detail: 'hello',
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          id: 'Cupcake',
          topic: 305,
          detail: 'hello',
          image: 'https://picsum.photos/500/300?image=232',
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          id: 'Gingerbread',
          topic: 356,
          detail: 'hello',
          image: 'https://picsum.photos/id/211/367/267',
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
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
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
      // You can now use this.selectedFile to access the selected image file
      // For example, you can upload it to the server or process it further
      // Example: this.uploadImageToServer();
    },
    uploadImageToServer() {
      // Implement your logic to upload the image to the server here
      // You can use libraries like Axios, fetch API, etc., to send the file to the server
      // Example with Axios:
      // const formData = new FormData();
      // formData.append('image', this.selectedFile);
      // axios.post('/upload-image', formData)
      //   .then(response => {
      //     console.log('Image uploaded successfully:', response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error uploading image:', error);
      //   });
    },
  },
}
</script>