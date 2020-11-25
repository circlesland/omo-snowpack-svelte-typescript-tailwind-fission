<script lang="ts">
  import { onMount } from "svelte";
  let count: number = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  .app {
    @apply px-5  h-screen bg-gray-50 text-blue-900 text-center flex text-4xl items-center justify-center;
  }
</style>

<div class="app">
  <div>
    <div class="flex items-center justify-center">
      <img src="logo.svg" alt="logo" class="w-48" />
    </div>
    <div class="text-2xl text-blue-700">
      Snowpack, Svelte, Typescript, Tailwind, Fission
    </div>
    <div class="text-blue-500 text-9xl">{count}</div>
  </div>
</div>
