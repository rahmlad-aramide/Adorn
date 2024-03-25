import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { data } from "../data";
import Error from "./Error";
import { discountCalc } from "../components/SingleProductCard";
import { CartContext } from "../contexts/CartContext";
import { ToastContainer } from "react-toastify";
import { inform, notify } from "../App";
import Breadcrumbs from "../components/Breadcrumbs";

const ProductSkeleton = () => {
  const breadcrumbs = [{ label: "Products", href: "/#on-sale", active: false }];
  return (
    <section>
      <div className="flex w-full max-w-6xl px-4 pt-[4.3125rem] sm:px-8 md:mx-auto md:w-[90%] md:px-0">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="flex items-center justify-center md:min-h-[calc(100vh_-_136px)]">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap pt-0 md:flex-nowrap md:py-4">
          {/* Skeleton Product Images Column */}
          <div className="mx-auto w-full animate-pulse p-4 pt-0 sm:px-8 md:w-1/2 md:max-w-md md:pt-4">
            <div className="mb-2 h-96 bg-gray-300 md:mb-4"></div>
            <div class="mt-4 flex gap-2">
              <div class="h-20 w-20 bg-gray-300"></div>
              <div class="h-20 w-20 bg-gray-300"></div>
              <div class="h-20 w-20 bg-gray-300"></div>
              <div class="h-20 w-20 bg-gray-300"></div>
            </div>
          </div>

          {/* Skeleton Product Description Column */}
          <div className="flex w-full animate-pulse p-4 pt-0 sm:p-8 sm:pt-0 md:w-1/2 md:pt-4">
            <div className="min-h-96 flex h-full w-full flex-col justify-center space-y-4">
              <div className="h-6 w-3/4 bg-gray-300"></div>
              <div className="h-8 w-1/2 bg-gray-300"></div>
              <div className="h-4 w-full bg-gray-300"></div>
              <div className="h-4 w-1/4 bg-gray-300"></div>
              <div className="mt-4 h-10 w-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Chevron(props) {
  return (
    <svg
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 185.343 185.343"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M51.707 185.343a10.692 10.692 0 01-7.593-3.149 10.724 10.724 0 010-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 01-7.587 3.15z"
        fill="#ffffff"
      />
    </svg>
  );
}

const ProductPage = () => {
  const { id } = useParams();
  const { cartItems, cartCount } = useContext(CartContext);
  if (!id || +id > data.length) {
    return <Error />;
  }
  const [product, setProduct] = useState(data.at(+id));
  const [activeImage, setActiveImage] = useState(data.at(id - 1).images[0]);
  const [loading, setLoading] = useState(true);
  const { removeItemFromCart, addItemToCart, reduceItemQuantity } =
    useContext(CartContext);

  useEffect(() => {
    if (!id) return;
    setProduct(data.filter((p) => p.id == id)[0]);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  const nextImage = () => {
    const currentIndex = product?.images?.indexOf(activeImage);
    const nextIndex = (currentIndex + 1) % product?.images?.length;
    setActiveImage(product?.images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = product?.images?.indexOf(activeImage);
    const prevIndex =
      (currentIndex - 1 + product?.images?.length) % product?.images?.length;
    setActiveImage(product?.images[prevIndex]);
  };

  const handleAddItemToCart = () => {
    addItemToCart(product);
    notify("Item added to cart");
  };

  const handleRemoveItem = () => {
    removeItemFromCart(item);
    inform("A product was removed from the cart!");
  };
  const handleIncreaseQuantity = () => {
    addItemToCart(item);
    notify("A quantity was added!");
  };
  const handleReduceQuantity = () => {
    reduceItemQuantity(item);
    inform("A quantity was reduced!");
  };

  const currItem = cartItems?.filter((item) => item?.id == id);
  const item = currItem[0] || [];

  if (loading) {
    return <ProductSkeleton />;
  }

  const breadcrumbs = [
    { label: "Products", href: "/#on-sale", active: false },
    { label: product.name, href: `/products/${id}`, active: true },
  ];
  return (
    <section>
      <ToastContainer />
      <div className="flex w-full max-w-6xl px-4 pt-[4.3125rem] sm:px-8 md:mx-auto md:w-[90%] md:px-0">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="flex items-center justify-center md:min-h-[calc(100vh_-_136px)]">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap pt-0 md:flex-nowrap md:py-4">
          {/* Product Images Column */}
          <div className="mx-auto w-full p-4 pt-0 sm:px-8 md:w-1/2 md:max-w-md md:pt-4">
            {/* Active Image */}
            <div className="relative mb-2 flex h-96 items-center justify-center border md:mb-4">
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-1 bg-secondary p-1 transition duration-200 active:scale-90 md:hidden"
              >
                <Chevron className="rotate-180" />
              </button>
              <img
                src={activeImage}
                alt="Active Product"
                className="h-auto w-full max-w-sm object-scale-down"
              />
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-1 bg-secondary p-1 transition duration-200 active:scale-90 md:hidden"
              >
                <Chevron />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="hidden gap-2 overflow-x-auto md:flex">
              {product?.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={`m-1 h-20 w-20 cursor-pointer object-scale-down ring-2 ${
                    activeImage === image ? "ring-secondary" : "ring-primary/10"
                  }`}
                  onClick={() => setActiveImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Description Column */}
          <div className="flex w-full p-4 pt-0 sm:p-8 sm:pt-0 md:w-1/2 md:pt-4">
            <div className="min-h-96 flex h-full w-full flex-col justify-center">
              <h1 className="mb-2 text-lg font-semibold uppercase text-secondary">
                {product?.catalog}
              </h1>
              <h2 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
                {product?.name}
              </h2>
              <p className="mb-4">{product?.description}</p>
              <div className="flex justify-between">
                {product.discount ? (
                  <div className="flex flex-col">
                    <div className="flex space-x-2 md:space-x-4">
                      <p className="my-auto flex h-fit items-center text-2xl font-extrabold md:text-4xl">
                        $
                        {discountCalc(product.price, product.discount).toFixed(
                          2
                        )}
                      </p>
                      <p className="my-auto flex h-fit items-center rounded bg-secondary/10 px-2 text-sm font-semibold text-secondary md:text-base">
                        {product?.discount}%
                      </p>
                    </div>
                    <div className="font-semibold opacity-50">
                      <s>${product?.price.toFixed(2)}</s>
                    </div>
                  </div>
                ) : (
                  <p className="my-auto flex h-fit items-center text-2xl font-extrabold md:text-4xl">
                    ${product?.price.toFixed(2)}
                  </p>
                )}
                <div className="flex w-fit items-center justify-center bg-gray-100 px-3 py-0 md:hidden">
                  <button
                    onClick={handleReduceQuantity}
                    disabled={item.quantity === 1 || !item.quantity}
                    className="duration bg-secondary px-2 text-lg font-bold text-white shadow-lg transition hover:scale-90 active:scale-100 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-secondary/40 disabled:shadow-none"
                  >
                    &minus;
                  </button>
                  <span className="mx-2 px-2 py-1 text-xl font-bold text-primary">
                    {item.quantity ?? 0}
                  </span>
                  <button
                    disabled={item.quantity === 0 || !item.quantity}
                    onClick={handleIncreaseQuantity}
                    className="duration bg-secondary px-2 text-lg font-bold text-white shadow-lg transition hover:scale-90 active:scale-100 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-secondary/40 disabled:shadow-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <div className="hidden w-fit items-center justify-center bg-gray-100 px-5 py-3 md:flex">
                  <button
                    onClick={handleReduceQuantity}
                    disabled={item.quantity === 1 || !item.quantity}
                    className="duration bg-secondary px-3 text-lg font-bold text-white shadow-lg transition hover:scale-90 active:scale-100 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-secondary/40 disabled:shadow-none"
                  >
                    &minus;
                  </button>
                  <span className="mx-2 px-2 py-1 text-xl font-bold text-primary">
                    {item.quantity ?? 0}
                  </span>
                  <button
                    disabled={item.quantity === 0 || !item.quantity}
                    onClick={handleIncreaseQuantity}
                    className="duration bg-secondary px-3 text-lg font-bold text-white shadow-lg transition hover:scale-90 active:scale-100 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-secondary/40 disabled:shadow-none"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddItemToCart}
                  className="flex flex-grow items-center justify-center border border-secondary bg-secondary px-5 py-3 text-white transition duration-200 hover:bg-transparent hover:text-secondary active:scale-90"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
