import Navbar from "../Shared/Navbar/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../Shared/Navbar/Footer";
import { getAddedPropertyList } from "../../SaveToLocalStorage/SaveToLocalStorage";
import PropertyCart from "./PropertyCart";
const Cart = () => {
  const property = getAddedPropertyList();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart | HomeHeaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>
      {property.length > 0 ? (
        <div className="flex flex-col gap-4 mt-5 lg:mt-10">
          {property.map((singleProperty, idx) => (
            <PropertyCart
              singleProperty={singleProperty}
              key={idx}
            ></PropertyCart>
          ))}
        </div>
      ) : (
        <div className="min-h-[500px] flex items-center justify-center text-xl">
          Your cart is empty
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Cart;
