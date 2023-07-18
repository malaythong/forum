<template>
    <div>
      <h1>Manage Forum (Admin)</h1>
      <h2>Users</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
  
      <h2>Posts</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
  
      <h2>Categories</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">
          {{ category.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          { id: 1, name: "User 1" },
          { id: 2, name: "User 2" },
          { id: 3, name: "User 3" },
        ],
        posts: [
          { id: 1, title: "Post 1" },
          { id: 2, title: "Post 2" },
          { id: 3, title: "Post 3" },
        ],
        categories: [
          { id: 1, name: "Category 1" },
          { id: 2, name: "Category 2" },
          { id: 3, name: "Category 3" },
        ],
      };
    },
  };
  </script>
  