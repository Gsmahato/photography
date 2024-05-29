import logo from "../assets/logo.png.webp"

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

  return (
    <header className="h-70px bg-transparent">
      <div className="py-5 px-0 w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="header-wrap z-9 relative">
            <div className="header-top flex items-center justify-between">
              <div className="logo">
                <a href="#home">
                  <img src={logo} alt="" />
                </a>
              </div>
              <div className="main-menubar flex items-center">
                <nav className="block mr-70px">
                  {links.map((link, index) => (
                    <a key={index} href={link.url} className=" text-white text-sm font-semibold uppercase mx-6">
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="menu-bar">
                <span></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header