import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";

const Navbar = ({ setShowCart }: any) => {
  return (
    <div className="sticky top-0 bg-accentDark z-10">
      <div className="container hidden lg:block mb-2">
        <div className="flex justify-between items-center p-4">
          <div className="flex justify-between items-end hover:cursor-pointer ">
            <img
              src="/public/logo.png"
              alt="logo image"
              className="w-10 h-10"
            />
            <h1 className="text-3xl text-white font-small">Grocery Store</h1>
          </div>

          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-[#F2F3F5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="Search Product..."
            />
            <BsSearch
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
              size={20}
            />
          </div>

          <div className="flex gap-4">
            <div className="icon__wrapper">
              <AiOutlineUser />
            </div>
            <div
              className="icon__wrapper relative cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart />
              <CartCountBadge size="w-[25px] h-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
