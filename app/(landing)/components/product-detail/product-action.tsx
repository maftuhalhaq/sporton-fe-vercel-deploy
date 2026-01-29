"use client";

import {
  FiArrowRight,
  FiChevronDown,
  FiChevronsUp,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionsProps = {
  product: Product;
  stock: number;
};

const ProductActions = ({ product, stock }: TProductActionsProps) => {
  const { addItem } = useCartStore();
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  const handleAddtoCart = () => {
    addItem(product, qty);
  };

  const handleCheckout = () => {
    push("/checkout");
  };

  return (
    <div className="flex gap-5">
      <div className="inline-flex border border-gray-500 w-fit min-w-20.5">
        <div className="w-12 h-12 flex items-center justify-center text-xl font-medium border-r border-gray-500">
          {qty}
        </div>
        <div className="flex flex-col">
          <button
            className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty < stock ? qty + 1 : qty)}
          >
            <FiChevronUp />
          </button>
          <button
            className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
      <Button className="px-20 w-full" onClick={handleAddtoCart}>
        <FiShoppingBag size={24} />
        Add to Cart
      </Button>
      <Button
        variant="dark"
        className="px-20 w-full"
        onClick={() => push("/checkout")}
      >
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};

export default ProductActions;
