import axiosInstance from "./axiosInstance";
import type { LightningNode } from "./types";

export async function fetchNodes(signal?: AbortSignal): Promise<LightningNode[]> {
  const response = await axiosInstance.get("/nodes/rankings/connectivity", { signal });
  
  if (!Array.isArray(response.data)) {
    throw new Error("Unexpected API response format");
  }
  
  if (response.data.length === 0) {
    throw new Error("No nodes returned from API");
  }

  return response.data;
}
