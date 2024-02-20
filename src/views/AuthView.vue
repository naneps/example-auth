<template>
  <!-- form login with tailwind -->
  <div
    class="flex justify-center items-center h-screen bg-slate-600-200 w-screen"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-1/4">
      <h1 class="text-3xl font-bold mb-4">Login</h1>
      <form>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
            >email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
          />
        </div>
        <div class="mb-4">
          <label
            for="password"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password</label
          >
          <div class="flex">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              name="password"
              class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            />
            <button
              type="button"
              class="text-white rounded font-bold text-3xl border-2 border-gray-200 bg-gray-200 hover:bg-gray-300"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? "😎" : "👁️" }}
            </button>
          </div>
        </div>
        <button
          type="submit"
          class="w-full bg-purple-500 text-white p-3 rounded font-bold hover:bg-purple-700"
          @click.prevent="login"
        >
          {{ isLoading ? "Loading..." : "Login" }}
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const email = ref("");
const password = ref("");
let showPassword = ref(false);
let isLoading = ref(false);
const login = () => {
  isLoading.value = true;
  axios
    .post(
      "http://192.168.1.37:8001/api/login",
      {
        email: email.value,
        password: password.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      // push name Home
      router.push({ name: "Home" });
      isLoading.value = false;
    })
    .catch((err) => {
      console.log(err);
      isLoading.value = false;
    });
};
</script>
<style></style>
