<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card elevation="0">
          <v-card elevation="1" class="mb-2">
            <v-tabs height="78" v-model="tab" grow color="primary">
              <v-tab v-for="(item, index) in items" :key="index">
                <v-col no-gutters>
                  <center class="mt-0">
                    <v-img
                      class="mt-0"
                      height="32"
                      width="32"
                      :src="pic(index)"
                    >
                    </v-img>
                  </center>
                  <h2 style="font-weight: normal !important">{{ item.tab }}</h2>
                </v-col>
              </v-tab>
            </v-tabs>
          </v-card>
     
          <div>
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="(item, index) in items" :key="index">
                <div >
                  <v-row >
                    <component class=" mx-4 pa-0" :is="item.content"></component>
                  </v-row>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import First from "~/components/Home/first_tab.vue";
import Second from "~/components/Home/second_tab.vue";
import Third from "~/components/Home/third_tab.vue";
export default {
  components: {
    First,
    Second,
    Third,
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: "ທັງໝົດ", content: "First" },
        { tab: "ແນະນຳ", content: Second },
        { tab: "ນິຍົມ", content: Third },
      ],
      posts: [
        {
          title: "First Post",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet lobortis sem, et fringilla ligula tristique in.",
          //cover: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg'
        },
        {
          title: "Second Post",
          content:
            "Sed eu odio ac felis tincidunt volutpat non vitae lacus. Aenean dapibus, tellus vitae ultrices luctus, purus felis volutpat ipsum, nec volutpat purus ex id justo.",
          cover: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        },
        {
          title: "Third Post",
          content:
            "Nunc accumsan libero non mauris laoreet, non lacinia lectus maximus. Etiam sagittis ipsum a volutpat auctor.",
          cover: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        },
      ],
    };
  },
  computed: {},
  methods: {
    pic(index) {
      if (index == 0) {
        return require("@/assets/images/compass.png");
      } else if (index == 1) {
        return require("@/assets/images/heart.png");
      } else if (index == 2) {
        return require("@/assets/images/rss.png");
      }
    },
    goToCreatePost() {
      // Add your navigation logic to the create post page here
      console.log("Create Post clicked");
    },
  },
};
</script>
