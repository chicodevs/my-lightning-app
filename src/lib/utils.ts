export function satsToBTC(sats: number): string {
  return (sats / 100_000_000).toFixed(8);
}

export function formatUnixTimestamp(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString();
}
