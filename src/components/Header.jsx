import { useState, useEffect } from "react";
import logo from "../assets/logo.png.webp";
import { Menu, X, Facebook, Instagram } from "lucide-react";

const links = [
  { name: "Home", url: "/" },
  { name: "About me", url: "/about" },
  { name: "Gallery", url: "/gallery" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
  { name: "Generic", url: "/generic" },
  { name: "Elements", url: "/elements" },
];

function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const changeNavbarBg = () => {
    if (window.scrollY >= 80) {
      setNavbarBg("bg-black/90");
    } else {
      setNavbarBg("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBg);
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 py-3 ${navbarBg}`}>
      <div className="px-4 lg:px-24 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between w-full">
            <div className="logo">
              <a href="#home">
                <img src={logo} alt="" />
              </a>
            </div>
            <ul className="hidden lg:flex space-x-12">
              {links.map((link, index) => (
                <a key={index} href={link.url} className="text-white text-sm font-semibold uppercase mx-6">
                  {link.name}
                </a>
              ))}
            </ul>
            <div className="lg:hidden md:flex flex-col justify-end flex">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X className="text-white" /> : <Menu className="text-white" />}
              </button>
            </div>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-black/90 w-full p-12 flex flex-col mt-3 justify-center items-center lg:hidden">
            <ul className="space-y-4 text-center">
              {links.map((link, index) => (
                <a key={index} href={link.url} className="block text-white text-sm font-semibold uppercase py-2">
                  {link.name}
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
