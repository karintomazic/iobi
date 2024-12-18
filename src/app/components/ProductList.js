"use client";

import { useEffect, useState } from "react";
import PocketBase from "pocketbase";

const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === "dev";
const pb = new PocketBase(
  isDev
    ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}`
    : process.env.NEXT_PUBLIC_POCKETBASE_URL
);

export default function ProductList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const records = await pb.collection("products").getList(1, 10, {
          $autoCancel: false,
        });
        console.log(records);
        setItems(records.items);
        console.log(items);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      <h2>Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items.map((item) => (
          <div key={item.id} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={`http://localhost:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}/api/files/${item.collectionId}/${item.id}/${item.product_image}`}
                alt={item.product_name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              ></img>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{item.product_name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
