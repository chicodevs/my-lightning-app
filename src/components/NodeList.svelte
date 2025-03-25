<script lang="ts">
  import { onMount } from "svelte";
  import { nodesStore } from "../lib/stores/nodes.svelte";
  import NodeItem from "./NodeItem.svelte";

  onMount(() => {
    nodesStore.refresh();
  });
</script>

<div class="p-6">
  {#if nodesStore.loading}
    <div
      class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 animate-pulse"
    >
      {#each Array(16) as _}
        <div
          class="min-w-[300px] h-60 rounded-xl bg-gray-200/80 shimmer-effect"
        ></div>
      {/each}
    </div>
  {:else if nodesStore.error}
    <p class="text-red-500" role="alert">
      {nodesStore.error?.message || "Unexpected error"}
    </p>
  {:else}
    <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {#each nodesStore.nodes as node (node.publicKey)}
        <div class="animate-fade-in">
          <NodeItem {node} />
        </div>
      {/each}
    </div>
  {/if}
</div>
