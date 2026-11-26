import type { Language } from "@/app/data/translations";

export function formatPrice(price: number, language: Language): string | null {
  if (!price) return null;
  return new Intl.NumberFormat(language, { style: "currency", currency: "EUR" }).format(price);
}
