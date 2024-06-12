import contact from '../assets/contact-img.jpg.webp'
import { ArrowRight } from "lucide-react"

function Contact() {

    return (
        <div className="w-full flex flex-wrap items-center">
            <div className="w-full md:w-1/2 lg:w-[42%]">
                <img
                    src={contact}
                    alt="Placeholder"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/2 px-4 md:pl-14 md:pr-8 lg:pr-48 flex flex-col justify-center'>
                <h1 className='text-3xl md:text-4xl font-bold mb-6 pt-10'>Send me a Message</h1>
                <p className="mb-6 text-black/80">Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.</p>
                <form action="" className="w-full bg-white rounded mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter email address"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your message"
                            rows="5"
                        />
                    </div>
                </form>
                <div className='flex w-full justify-center md:justify-end md:pb-10 pb-10'>
                    <button className="flex mt-4 px-6 py-3 justify-end items-end bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 text-white rounded-full uppercase shadow-md hover:from-purple-500 hover:to-green-500 focus:outline-none focus:ring focus:ring-purple-400 focus:ring-opacity-50">
                        CONFIRM BOOKING
                        <span className="pl-4"><ArrowRight /></span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Contact;
