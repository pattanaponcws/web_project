import { CgMenu, CgClose } from "react-icons/cg";
import { MdFastfood } from "react-icons/md";
import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";

const Navbar= () => {
  const paths = [
    { key: 1, name: "Home", path: "/" },
    { key: 2, name: "Orders", path: "/restaurant" },
    { key: 3, name: "Post", path: "/Post" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className="shadow-lg w-full fixed top-0 lef-0 ">
      <div className="md:flex items-center justify-between  py-[1rem] md:px-[6rem] px-[3rem]">
      <a href="/">

        <div className="font-bold text-2xl cursor-pointer flex items-center  text-orange-600">
        🥔
          Potato
        </div>
      </a>
        <div
          className="text-orange-600 absolute right-8 top-7 text-3xl cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {!open && <CgMenu></CgMenu>}
          {open && <CgClose></CgClose>}
        </div>
        <ul
          className={` md:flex md:items-center md:pb-0 pb-6 absolute md:static md:z-auto z-[-1] left-0 w-full
            md:w-auto md:pl-0 pl-12 transition-all ease-in duration-500 md:border-b-0 border-b-2  ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            }`}
        >
          {paths.map((path) => (
            <li key={path.key} className="md:ml-7 md:my-0 my-7">
              <a
                href={path.path}
                className=" text-orange-600 hover:text-orange-700 text-xl font-bold duration-500"
              >
                {path.name}
              </a>
            </li>
          ))}
          <li className="md:ml-7 md:my-0 my-7">
            <a href="\Cart">
            <button className="font-bold rounded-full bg-orange-600 text-xl text-white px-5 py-2  hover:bg-orange-700 duration-500">
            <HiShoppingCart/>
            </button>
            </a>
          </li>
          <li className="md:ml-7 md:my-0 my-7">
            <a href="\Login">
            <button className="font-bold bg-orange-600 text-xl text-white px-5 py-2 rounded-full hover:bg-orange-700 duration-500">
            <HiUser/>
            </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;