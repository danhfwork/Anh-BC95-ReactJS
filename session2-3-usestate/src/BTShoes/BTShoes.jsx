// rafc
import React, { useState } from "react";
import dataShoes from "./data.json";
import { ProductList } from "./ProductList";
import { ProductDetail } from "./ProductDetail";
import ProductCart from "./ProductCart";

export const BTShoes = () => {
  console.log({ dataShoes });
  const [prdDetail, setPrdDetail] = useState({
    sizes: [32, 33, 34, 35],
    id: 2,
    name: "vans old school",
    alias: "vans-old-school",
    price: 200,
    description:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    size: "[32,33,34,35]",
    shortDescription:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 200,
    deleted: false,
    categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
    relatedProducts: "[3,2,1]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
    imgLink: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
  });
  const [cart, setCart] = useState([
    {
      sizes: [32, 33, 34, 35],
      id: 2,
      name: "vans old school",
      alias: "vans-old-school",
      price: 200,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 200,
      deleted: false,
      categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
      relatedProducts: "[3,2,1]",
      feature: true,
      image: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
      imgLink: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
      cartQuantity: 1,
    },
  ]);

  console.log({ prdDetail });
  // newPrd là 1 object
  const handlePrdDetail = (newPrd) => {
    setPrdDetail(newPrd);
  };

  //
  const handleAddtoCart = (prd) => {
    // Thêm sản phẩm vào giỏ hảng
    const index = cart.findIndex((item) => item.id === prd.id);
    if (index === -1) {
      prd.cartQuantity = 1;
      setCart([...cart, prd]);
    } else {
      const newCart = [...cart];
      newCart[index].cartQuantity += 1;
      setCart(newCart);
    }
  };
  //
  const handleDeleteCart = (prdID) => {
    setCart(cart.filter((item) => item.id !== prdID));
  };

  return (
    <div className="mt-10 container mx-auto">
      <h1 className="text-center text-2xl font-medium">BT Shoes</h1>

      {/* DS sản phẩm */}
      {/* <div className="grid grid-cols-3 gap-4">
                {dataShoes.map((shoe) => (
                    <div key={shoe.id} className="p-4 border rounded-md border-black/20">
                        <img src={shoe.image} alt={shoe.name} />
                        <h2>{shoe.name}</h2>
                        <h2>{shoe.price}</h2>
                    </div>
                ))}
            </div> */}

      <ProductDetail product={prdDetail} />
      <ProductCart cart={cart} handleDeleteCart={handleDeleteCart} />
      <button
        data-bs-toggle="modal"
        data-bs-target="#product-cart-modal"
        className="btn btn-success mb-5"
      >
        Cart
      </button>

      <ProductList
        data={dataShoes}
        handlePrdDetail={handlePrdDetail}
        handleAddtoCart={handleAddtoCart}
      />
    </div>
  );
};

// Tham trị và tham chiếu
// Tham trị: value type (string, number, boolean, null, undefined)
// Tham chiếu: reference type (obj, arr, function)
