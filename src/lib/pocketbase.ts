import PocketBase, { type RecordModel, type RecordService } from "pocketbase";

export interface CategoryRecord extends RecordModel {
  category: string;
}

export interface ProductRecord extends RecordModel {
  product_name: string;
  product_image: string[];
  price: number;
  size: string;
  weight: string;
  category: string;
  featured: boolean;
}

interface TypedPocketBase extends PocketBase {
  collection(idOrName: "category"): RecordService<CategoryRecord>;
  collection(idOrName: "products"): RecordService<ProductRecord>;
  collection(idOrName: string): RecordService;
}

function getPocketBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_POCKETBASE_URL;
  if (!url) {
    throw new Error(
      "NEXT_PUBLIC_POCKETBASE_URL is missing. Add it to .env.local",
    );
  }
  return process.env.NEXT_PUBLIC_ENVIRONMENT === "dev"
    ? `${url}:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}`
    : url;
}

// The one PocketBase client the whole app uses.
export const pb = new PocketBase(getPocketBaseUrl()) as TypedPocketBase;

export function getImageUrl(
  product: ProductRecord,
  fileName: string,
  thumb?: "600x0" | "1200x0",
): string {
  return pb.files.getURL(product, fileName, thumb ? { thumb } : undefined);
}
