// Map currency codes to country codes for flag images
export const currencyToCountry: Record<string, string> = {
  USD: "us",
  EUR: "eu",
  GBP: "gb",
  INR: "in",
  AED: "ae",
  CAD: "ca",
  AUD: "au",
  JPY: "jp",
  CNY: "cn",
  CHF: "ch",
  SGD: "sg",
  NZD: "nz",
  HKD: "hk",
  SEK: "se",
  KRW: "kr",
  MXN: "mx",
  ZAR: "za",
  BRL: "br",
  THB: "th",
  SAR: "sa",
  KWD: "kw",
};

export const getFlagUrl = (currencyCode: string): string => {
  const countryCode = currencyToCountry[currencyCode] || "us";
  return `https://flagcdn.com/w80/${countryCode}.png`;
};
