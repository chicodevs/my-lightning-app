<script lang="ts">
  import { LightningBolt } from "../icons";
  import { Refresh } from "../icons";
  import { nodesStore } from "../lib/stores/nodes.svelte";

  function handleRefresh() {
    nodesStore.refresh();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<header
  class="w-full flex items-center justify-between py-6 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-lightning-300 to-lightning-600 text-white shadow-lg sticky top-0 z-50"
>
  <h1 class="text-2xl md:text-3xl font-bold">
    <span class="flex items-center space-x-3">
      <LightningBolt />
      <span>Lightning Network Top 100 Nodes</span>
    </span>
  </h1>
  <button
    on:click={handleRefresh}
    disabled={nodesStore.loading}
    aria-label="Refresh Nodes"
    class="flex items-center space-x-2 px-4 py-2 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50"
    class:opacity-75={nodesStore.loading}
  >
    <Refresh isLoading={nodesStore.loading} />
    <span>{nodesStore.loading ? "Refreshing..." : "Refresh Nodes"}</span>
  </button>
</header>
