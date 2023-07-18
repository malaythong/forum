<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title class="text-center">
              <h2>Login</h2>
            </v-card-title>
            <v-card-text>
              <v-form @submit="login">
                <v-text-field
                  v-model="username"
                  label="Username"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn type="submit" color="primary" block>Login</v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions>
                <router-link to="/auth/register">Don't have an account? Register</router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Add your login logic here
        console.log('Login clicked');
        console.log('Username:', this.username);
        console.log('Password:', this.password);
      },
      register() {
        // Add your register logic here
        console.log('Register clicked');
      }
    }
  }
  </script>
  