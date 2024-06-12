import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

function Footer() {
    return (
        <footer className="w-full bg-black/85 md:mt-8 sm:mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-24 lg:mx-48 px-4 py-10">
                <div className="mb-4 md:mb-0">
                    <p className="text-white text-center md:text-left">&copy; {new Date().getFullYear()} All rights reserved | GS Mahato</p>
                </div>
                <div className="flex text-white">
                    <a href="https://x.com" className="mx-1 bg-black h-10 w-10 flex justify-center items-center" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                    </a>
                    <a href="https://www.facebook.com" className="mx-1 bg-black h-10 w-10 flex justify-center items-center" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4" />
                    </a>
                    <a href="https://www.instagram.com" className="mx-1 bg-black h-10 w-10 flex justify-center items-center" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                    </a>
                    <a href="https://www.linkedin.com" className="mx-1 bg-black h-10 w-10 flex justify-center items-center" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
