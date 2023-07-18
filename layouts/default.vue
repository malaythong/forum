<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items.slice(0, 5)"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ items.title }}</v-toolbar-title>
      <v-text-field     
      label="Search"
      placeholder="ຊື່ກະທູ້, ຊື່ແທັກ, ໝວດໝູ່"
      outlined
      hide-details
      solo
      dense
      class="custom-text-field"
    ></v-text-field>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
      <v-spacer />

      
      <v-btn color="primary" text>
        <v-icon>mdi-comment-plus-outline</v-icon>
        <span>ສ້າງກະທູ້ໃໝ່</span>
      </v-btn>
      <v-btn color="primary" icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltipOn }">
              <v-avatar color="primary" dark v-on="{ ...tooltipOn, ...on }">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </template>
            <span>Profile</span>
          </v-tooltip>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items.slice(4, 7)"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-title>{{ item.list }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home Page",
          to: "/content",
        },
        {
          icon: "mdi-comment-plus",
          title: "ສ້າງກະທູ້ໃໝ່",
          to: "/content/create",
        },
        {
          icon: "mdi-clock",
          title: "ປະຫວັດການເຂົ້າອ່ານ",
          to: "/content/feed",
        },
        {
          icon: "mdi-tag",
          title: "ແທັກ",
          to: "/info/tag",
        },
        {
          icon: "mdi-face-agent",
          title: "ຕິດຕໍ່ທິມງານ",
          to: "/report/contact_admin",
        },
        {
          list: "My Profile",
          to: "/info/profile",
        },
        {
          list: "Manage Profile",
          to: "/manage/profile",
        },
        {
          list: "Setting",
          to: "/manage/setting",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Report",
    };
  },
};
</script>

<style scoped>
.custom-text-field {
  width: 50px; /* Adjust the width as needed */
}
</style>