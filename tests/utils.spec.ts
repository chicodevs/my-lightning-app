import { describe, it, expect } from "vitest";
import { satsToBTC, formatUnixTimestamp } from "../src/lib/utils";

describe("utils", () => {
  it("converts sats to BTC correctly", () => {
    expect(satsToBTC(100_000_000)).toBe("1.00000000");
    expect(satsToBTC(50_000_000)).toBe("0.50000000");
    expect(satsToBTC(1_234_567)).toBe("0.01234567");
  });

  it("formats Unix timestamp", () => {
    const dateString = formatUnixTimestamp(1609459200); // 2021-01-01 00:00:00 UTC
    expect(dateString).toContain("2021");
  });
});