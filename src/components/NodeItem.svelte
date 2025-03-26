<script lang="ts">
  import type { LightningNode } from "../lib/types"
  import { satsToBTC, formatUnixTimestamp } from "../lib/utils"
  import Copy from "../icons/Copy.svelte"

  let { node }: { node: LightningNode } = $props()

  function truncatedKey(pk: string) {
    return `${pk.slice(0, 6)}...${pk.slice(-6)}`
  }

  function copyKey(pk: string) {
    navigator.clipboard.writeText(pk).then(() => {
      alert("Copied Public Key!")
    })
  }
</script>

<article
  class="
    glass-card
    rounded-xl
    transition-all
    duration-300
    hover:shadow-xl
    lightning-glow
    p-5
    flex
    flex-col
    min-w-[300px]
    h-60
    border
    border-gray-300
    bg-white
    shadow
  "
>
  <div class="flex items-center w-full gap-2 mb-3">
    <div class="relative group flex-1 min-w-0">
      <h2 class="font-semibold text-lg text-gray-900 truncate">
        {node.alias || "Unknown Node"}
      </h2>
      <div
        class="
          absolute
          left-0
          bottom-full
          mb-2
          hidden
          group-hover:block
          bg-gray-800
          text-white
          text-xs
          rounded
          py-1
          px-2
          z-50
          whitespace-nowrap
        "
      >
        {node.alias || "Unknown Node"}
      </div>
    </div>
    <div
      class="
        px-2
        py-1
        rounded-full
        bg-lightning-50
        text-lightning-700
        text-xs
        font-medium
        flex-shrink-0
      "
    >
      {node.country?.en || "Unknown"}
    </div>
  </div>

  <div class="space-y-2 flex-grow mb-3">
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-500">Public Key:</span>
      <div class="flex items-center gap-2">
        <span class="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded break-all">
          {truncatedKey(node.publicKey)}
        </span>
        <button
          class="text-xs cursor-pointer"
          onclick={() => copyKey(node.publicKey)}
          aria-label="Copy Public Key"
        >
          <Copy />
        </button>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-500">Channels:</span>
      <span class="text-sm font-medium">
        {node.channels.toLocaleString()}
      </span>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-500">Capacity:</span>
      <span class="text-sm font-medium text-lightning-600">
        {satsToBTC(node.capacity)} <span class="text-gray-400">BTC</span>
      </span>
    </div>
  </div>

  <div class="pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-500">
    <div class="flex justify-between">
      <span>First Seen:</span>
      <span>{formatUnixTimestamp(node.firstSeen)} <span class="text-gray-400">UTC</span></span>
    </div>
    <div class="flex justify-between">
      <span>Last Updated:</span>
      <span>{formatUnixTimestamp(node.updatedAt)} <span class="text-gray-400">UTC</span></span>
    </div>
  </div>
</article>
