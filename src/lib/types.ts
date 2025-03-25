export interface Country {
  de: string;
  en: string;
  es: string;
  fr: string;
  ja: string;
  "pt-BR": string;
  ru: string;
  "zh-CN": string;
}

export interface LightningNode {
  publicKey: string;
  alias: string;
  capacity: number;
  channels: number;
  city: string | null;
  country: Country;
  firstSeen: number;
  iso_code: string;
  subdivision: string | null;
  updatedAt: number;
}
