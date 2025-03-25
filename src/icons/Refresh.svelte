<script lang="ts">
  let { size = "24", color = "#ffff", isLoading = false } = $props();
</script>

<svg
  class="transition-transform duration-700 ease-in-out"
  class:animate-spin-slow={isLoading}
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="none"
  viewBox="0 0 24 24"
  stroke={color}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="23 4 23 10 17 10"></polyline>
  <polyline points="1 20 1 14 7 14"></polyline>
  <path d="M3.51 9a9 9 0 0 1 14.36-3.36L23 10"></path>
  <path d="M20.49 15a9 9 0 0 1 -14.36 3.36L1 14"></path>
</svg>
