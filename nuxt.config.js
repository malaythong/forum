import colors from "vuetify/es5/util/colors";


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - project",
    title: "project",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [{ src: "~/plugins/apollo.js", mode: "client" }],

  // apollo: {
  //   cookieAttributes: {
  //     expires: 7,
  //   },

  //   defaultOptions: {
  //     $query: {
  //       loadingKey: "loading",
  //       fetchPolicy: "no-cache",
  //       errorPolicy: "all",
  //     },
  //   },
  //   clientConfigs: {
  //     default: {
  //       // YOUR ENDPOINT OF YOUR APOLLO CLIENT OR HASURA ENDPOINT
  //       httpEndpoint: "https://big-baboon-88.hasura.app/v1/graphql",
  //       wsEndpoint: "wss://big-baboon-88.hasura.app/v1/graphql",
  //       tokenName: "access_token",
  //       includeNodeModules: true,
  //       authenticationType: "Bearer",
  //       httpLinkOptions: {
  //         headers: {
  //           "content-type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Methods": "GET,PUT,PATCH,OPTIONS,DELETE,POST",
  //         },
  //       },
  //     },
  //   },
  // },

  apollo: {
    errorHandler: "~/plugins/apollo-error-handler.js",
    clientConfigs: {
      default: {
        httpEndpoint: 'https://poetic-jaybird-10.hasura.app/v1/graphql',
        wsEndpoint: 'ws://poetic-jaybird-10.hasura.app/v1/graphql',
        wsLinkOptions: {
          reconnect: true,
        },
        defaultOptions: {
          $query: {
            fetchPolicy: "no-cache",
            errorPolicy: "all",
            notifyOnNetworkStatusChange: true,
          },
        },
        httpLinkOptions: {
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`,
          },
        },

        tokenName: "access_token",
        authenticationType: "Bearer",
        persisting: false,
        // websocketsOnly: true,
      },
    },
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#595CBC",
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: "#DA5644",
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient }) {
      // Add a rule for .gql files
      config.module.rules.push({
        test: /\.gql$/,
        use: 'graphql-tag/loader',
        exclude: /node_modules/,
      });
    },
  },
};
