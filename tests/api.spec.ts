import { describe, it, expect, vi } from "vitest";
import { fetchNodes } from "../src/lib/api";
import axiosInstance from "../src/lib/axiosInstance";

vi.mock("../src/lib/axiosInstance", () => ({
  default: {
    get: vi.fn(),
  },
}));

describe("fetchNodes", () => {
  it("should return data when API returns a valid array", async () => {
    const data = [
      {
        publicKey: "abc",
        alias: "Test",
        channels: 10,
        capacity: 100000000,
        firstSeen: 1609459200,
        updatedAt: 1609459300,
        country: { en: "USA" },
      },
    ];
    (axiosInstance.get as any).mockResolvedValueOnce({ data });

    const result = await fetchNodes();
    expect(result).toEqual(data);
  });

  it("should throw error if response.data is not an array", async () => {
    (axiosInstance.get as any).mockResolvedValueOnce({
      data: { error: "something wrong" },
    });
    await expect(fetchNodes()).rejects.toThrow(
      "Unexpected API response format"
    );
  });

  it("should throw error if response.data is an empty array", async () => {
    (axiosInstance.get as any).mockResolvedValueOnce({ data: [] });
    await expect(fetchNodes()).rejects.toThrow("No nodes returned from API");
  });
});
