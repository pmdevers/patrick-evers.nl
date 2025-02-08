<script setup>
import { ref } from "vue";

const testimonials = ref([
  {
    name: "John Doe",
    feedback: "NeoBank makes banking effortless! The app is smooth and secure.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Smith",
    feedback: "Their customer support is top-notch! Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Wilson",
    feedback: "I love the zero-fee international transactions!",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
]);
</script>

<template>

  <div class="bg-blue-50 text-blue-900">
    <!-- Hero Section -->
    <section class="relative bg-blue-600 text-white py-20 text-center">
      <div class="container mx-auto px-6">
        <h1 class="text-5xl font-bold">Welcome to NeoBank</h1>
        <p class="mt-4 text-lg">Banking redefined for the digital age.</p>
        <button class="mt-6 px-6 py-3 bg-white text-navy-600 font-semibold rounded-lg shadow-lg hover:bg-navy-200 transition">
          Get Started
        </button>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">Why Choose NeoBank?</h2>
        <div class="grid md:grid-cols-3 gap-8 mt-10">
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold">Zero Fees</h3>
            <p class="mt-2 text-gray-600">No hidden charges, no surprises.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold">24/7 Support</h3>
            <p class="mt-2 text-gray-600">We’re here for you anytime, anywhere.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold">Secure Transactions</h3>
            <p class="mt-2 text-gray-600">Advanced security to protect your money.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">What Our Customers Say</h2>
        <div class="grid md:grid-cols-3 gap-8 mt-10">
          <div v-for="(testi, index) in testimonials" :key="index" class="bg-white p-6 rounded-lg shadow text-center">
            <img :src="testi.image" alt="User" class="w-16 h-16 rounded-full mx-auto">
            <h3 class="text-lg font-semibold mt-4">{{ testi.name }}</h3>
            <p class="mt-2 text-gray-600">"{{ testi.feedback }}"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 text-center bg-blue-500 text-white">
      <h2 class="text-3xl font-bold">Join NeoBank Today</h2>
      <p class="mt-4 text-lg">Experience seamless, secure, and modern banking.</p>
      <button class="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
        Open an Account
      </button>
    </section>
  </div>
</template>
