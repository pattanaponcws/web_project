import { CgMenu, CgClose } from "react-icons/cg";
import { MdFastfood } from "react-icons/md";
import { useState } from "react";

const Navbar= () => {
  const paths = [
    { key: 1, name: "Our services", path: "/Cart" },
    { key: 2, name: "Orders", path: "/restaurant" },
    { key: 3, name: "Post", path: "/Signup" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className="shadow-lg w-full fixed top-0 lef-0">
      <div className="md:flex items-center justify-between  py-[1rem] md:px-[6rem] px-[3rem]">
      <a href="/">

        <div className="font-bold text-2xl cursor-pointer flex items-center  text-orange-600">
        🥔
          Potato
        </div>
      </a>
        <div
          className="text-teal-700 absolute right-8 top-7 text-3xl cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {!open && <CgMenu></CgMenu>}
          {open && <CgClose></CgClose>}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static md:z-auto z-[-1] left-0 w-full
            md:w-auto md:pl-0 pl-12 transition-all ease-in duration-500 md:border-b-0 border-b-2  ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            }`}
        >
          {paths.map((path) => (
            <li key={path.key} className="md:ml-7 md:my-0 my-7">
              <a
                href={path.path}
                className="text-teal-700 hover:text-teal-500 font-bold duration-500"
              >
                {path.name}
              </a>
            </li>
          ))}
          <li className="md:ml-7 md:my-0 my-7">
            <a href="\Login">
            <button className="font-bold bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-500 duration-500">
              Login
            </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;