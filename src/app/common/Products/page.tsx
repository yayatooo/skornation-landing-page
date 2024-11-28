import { CardProduct } from "@/components/CardProduct";
import { ProductsDummy } from "@/utils/data";
import { HeadTitle } from "@/components/HeadTitle";
import React from "react";
import { Button } from "@/components/Button";

export default function Products() {
  return (
    <>
      <section className="py-16 container mx-auto">
        <HeadTitle>TOP RATED PRODUCTS</HeadTitle>
        <div className="py-8 flex gap-8 justify-center">
          {ProductsDummy.map((item) => (
            <CardProduct
              key={item.id}
              title={item.title}
              genderCategory={item.genderCategory}
              image={item.image}
            />
          ))}
        </div>
        <div className="flex justify-center py-3">
          <Button>View All Products</Button>
        </div>
      </section>
    </>
  );
}
