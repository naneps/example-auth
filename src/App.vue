<template>
  <main class="h-screen w-full bg-slate-800">
    <div class="flex flex-col justify-center h-screen items-center">
      <router-view></router-view>
    </div>
  </main>
</template>
<script>
export default {};
</script>
<style>
.text-animation {
  /* make animation change random color */
  animation: text-animation 1s infinite;
  transition: all 0ms ease-in-out;
}
@keyframes text-animation {
  0% {
    color: #f56565;
    transition: all 0.5s ease-in-out;
    /* transform: rotate(2deg); */
  }
  25% {
    color: #d1fe82;
    transform: rotate(4deg);
    /* transition: all 0.5s ease-in-out; */
  }
  50% {
    color: #48bb78;
    /* transition: all 0.5s ease-in-out; */
    transform: rotate(0deg);
  }
  75% {
    color: #4299e1;
    transform: rotate(-4deg);
    /* transition: all 0.5s ease-in-out; */
  }
  100% {
    /* transition: all 0.5s ease-in-out; */
    color: #f56565;
    transform: rotate(-2deg);
  }
}
/* make tail animation */
</style>
