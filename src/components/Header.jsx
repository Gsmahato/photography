import logo from "../assets/logo.png.webp"
import { Menu, X, Facebook, Instagram } from "lucide-react"
import { useState } from "react";

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

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  };

  return (
    <header className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-black/80 border-b border-neutral-700/80">
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
                <a key={index} href={link.url} className=" text-white text-sm font-semibold uppercase mx-6">
                  {link.name}
                </a>
              ))}
            </ul>
            {/* <div className="hidden lg:flex space-x-1">
              <a href="https://www.facebook.com" className="mx-4" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              <a href="https://www.instagram.com" className="mx-4" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </div> */}
            <div className="lg:hidden md:flex flex-col justify-end flex">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X className="text-white" /> : <Menu className="text-white" />}
              </button>
            </div>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-black/60 w-full p-12 flex flex-col mt-3 justify-center item-center lg:hideen">
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
  )
}

export default Header