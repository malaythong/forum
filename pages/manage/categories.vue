<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="8">
        <v-card>
          <v-card-title class="text-center">
            <h2>ໝວດໝູ່</h2>
          </v-card-title>
          <v-slide-group
            v-model="model"
            class="pa-2"
            active-class="success"
            show-arrows
          >
            <v-slide-item v-for="n in 20" :key="n" v-slot="{ active, toggle }">
            <v-col no-gutters>
              <v-row >
                <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="d-flex align-stretch mb-0"
                height="100"
                width="100"
                elevation="1"
                flat
                tile
                @click="toggle"
              >align-stretch
            
              </v-card>
              </v-row>
              <v-row >
                <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="d-flex align-stretch mb-6"
                height="100"
                width="100"
                elevation="1"
                flat
                tile
                @click="toggle"
              >align-stretch
            
              </v-card>
              </v-row>
            </v-col>
            </v-slide-item>
          </v-slide-group>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: [{
        
      }
    ],
    };
  },
};
</script>

<style>
.box {
  width: 100px; /* Adjust the width as needed */
  height: 100px; /* Adjust the height as needed */
}
.box-content {
  margin: 1px; /* Adjust the margin as needed */
}
</style>
