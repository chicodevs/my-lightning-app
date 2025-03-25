<script lang="ts">
  import type { LightningNode } from "../lib/types";
  import { satsToBTC, formatUnixTimestamp } from "../lib/utils";

  let { node }: { node: LightningNode } = $props();
</script>

<article class="bg-white border border-gray-300 rounded-xl shadow-md p-5 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex flex-col justify-between min-w-[250px]">
  <h2 class="text-lg font-semibold text-blue-700 mb-2">{node.alias || "Unknown Node"}</h2>
  <p class="break-all"><strong>Public Key:</strong> {node.publicKey}</p>
  <p><strong>Channels:</strong> {node.channels}</p>
  <p><strong>Capacity:</strong> {satsToBTC(node.capacity)} BTC</p>
  <p><strong>First Seen:</strong> {formatUnixTimestamp(node.firstSeen)}</p>
  <p><strong>Last Updated:</strong> {formatUnixTimestamp(node.updatedAt)}</p>
  <p><strong>Country:</strong> {node.country?.en || "Unknown"}</p>
</article>
