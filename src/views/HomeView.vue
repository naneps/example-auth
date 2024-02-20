<template>
  <div class="">
    <h1 class="text-3xl font-bold mb-4">Home</h1>
    <div>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-scroll"
      >
        <li
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
            <p class="text-gray-600">{{ product.description }}</p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-gray-900 font-semibold"
                >${{ product.price }}</span
              >
              <span class="text-gray-500">{{ product.unit.name }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
let products = ref([]);
function getProducts() {
  axios
    .get("http://192.168.1.37:8001/api/products", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      products.value = res.data.products;
    })
    .catch((err) => {
      console.log(err);
    });
}
onMounted(() => {
  getProducts();
});
</script>

<style>
/* Add your custom styles here */
</style>
