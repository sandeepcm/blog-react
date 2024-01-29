
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiMenuLine } from "react-icons/ri";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`flex items-center justify-between py-4 border-b z-[10001] transition-all duration-300 ease-in ${
        isScrolled ? "fixed bg-white shadow-md md:px-32 top-0 left-0 right-0" : ""
      }`}>
        <a href="/" className="px-2 lg:px-0 uppercase font-bold text-purple-800">
          MyBlog
        </a>
        
        <div className="sm:block hidden">
        {/* <Search /> */}
        </div>
  
        <ul className="md:inline-flex items-center hidden">
          <li className="px-2 md:px-4">
            <Link
              to="/"
              className="text-purple-600 font-semibold hover:text-purple-500"
            >
              {" "}
              Home{" "}
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-purple-500"
            >
              {" "}
              About{" "}
            </a>
          </li>
          <li className="px-2 md:px-4">
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-purple-500"
            >
              {" "}
              Press{" "}
            </a>
          </li>
          <li className="px-2 md:px-4">
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-purple-500"
            >
              {" "}
              Contact{" "}
            </a>
          </li>
          <li className="px-2 md:px-4 hidden md:block">
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-purple-500"
            >
             
              Login
            </a>
          </li>
         
        </ul>
  
        <ul className="sm:hidden">
        <li className="px-2 md:px-4">
            <Link
              to="/"
              className="text-purple-600 font-semibold hover:text-purple-500"
            >
              <RiMenuLine className="text-gray-600" />
            </Link>
          </li>
        </ul>
      </header>
  )
}

export default Navbar