export function satsToBtc(sats: number): string {
  return (sats / 100_000_000).toFixed(8) + " BTC";
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString();
}
