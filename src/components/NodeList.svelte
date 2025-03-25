<script lang="ts">
  import { onMount } from "svelte";
  import { nodesStore } from "../lib/stores/nodes.svelte";
  import NodeItem from "./NodeItem.svelte";

  onMount(() => {
    nodesStore.refresh();
  });
</script>

<div class="p-6">
  <button
    class="mb-4 cursor-pointer px-4 py-2 bg-blue-600 text-white rounded transition hover:bg-blue-700"
    on:click={nodesStore.refresh}
    disabled={nodesStore.loading}
    aria-label="Refresh nodes list"
  >
    Refresh List
  </button>

  {#if nodesStore.loading}
    <p class="text-gray-500" role="status" aria-live="polite">Loading nodes...</p>
  {:else if nodesStore.error}
    <p class="text-red-500" role="alert">{nodesStore.error?.message || "Unexpected error"}</p>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each nodesStore.nodes as node (node.publicKey)}
        <NodeItem {node} />
      {/each}
    </div>
  {/if}
</div>
