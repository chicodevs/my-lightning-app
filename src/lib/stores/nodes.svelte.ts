import type { LightningNode } from "../types";
import { fetchNodes } from "../api";

export function createNodesStore() {
  let nodes = $state<LightningNode[]>([]);
  let loading = $state(false);
  let error = $state<Error | null>(null);
  let controller: AbortController | null = null;

  async function loadNodes() {
    loading = true;
    error = null;

    if (controller) {
      controller.abort();
    }
    controller = new AbortController();

    try {
      const response = await fetchNodes(controller.signal);
      nodes = response;
    } catch (err: unknown) {
      if (err instanceof Error) {
        error = err;
      } else {
        error = new Error("Unknown error fetching nodes.");
      }
    } finally {
      loading = false;
      controller = null;
    }
  }

  return {
    get nodes() {
      return nodes;
    },
    get loading() {
      return loading;
    },
    get error() {
      return error;
    },
    refresh: loadNodes,
  };
}

export const nodesStore = createNodesStore();
