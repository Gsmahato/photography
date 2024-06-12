import { Heart, MessageCircle } from 'lucide-react'
import b1 from "../assets/b1.jpg.webp"
import b2 from "../assets/b2.jpg.webp"
import b3 from "../assets/b3.jpg.webp"
import author1 from "../assets/user.png.webp"

const posts = [
    {
        title: 'PORTABLE FASHION FOR YOUNG WOMEN',
        image: b1,
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        author: {
            name: 'John Doe',
            image: author1
        },
        date: 'June 20, 2024',
        likes: 20,
        comments: 10
    },
    {
        title: 'SUMMER WARE ARE COMING',
        image: b2,
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        author: {
            name: 'John Doe',
            image: author1
        },
        date: 'June 20, 2024',
        likes: 20,
        comments: 10
    },
    {
        title: 'SUMMER WARE ARE COMING',
        image: b3,
        excerpt: 'This is a short excerpt of the blog post 3.',
        author: {
            name: 'John Doe',
            image: author1
        },
        date: 'June 20, 2024',
        likes: 20,
        comments: 10
    }
];

function Blog() {
    return (
        <div className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-black pb-12 mb-6">
                    <h1 className='text-3xl md:text-4xl font-bold mb-6'>My Recent Blogs</h1>
                    <p className='text-base md:text-lg text-black/60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {posts.map((post, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <div className="relative overflow-hidden group">
                                    <a href="#">
                                        <img className="w-full transition-transform duration-300 transform group-hover:scale-105" src={post.image} alt={post.title} />
                                        <div className="absolute inset-0 bg-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                                    </a>
                                </div>
                                <div className="px-4 py-4">
                                    <div className="font-bold text-xl mb-2">
                                        {post.title}
                                    </div>
                                    <p className="text-gray-700 text-base pb-6">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <img src={post.author.image} alt={post.author.name} className="w-8 h-8 rounded-full mr-2" />
                                            <span className="text-sm">{post.author.name}</span>
                                        </div>
                                        <div className="text-sm flex items-center">
                                            <span className="mr-1">{post.date}</span>
                                            <span className="flex items-center mr-2 text-gray-700">
                                                <Heart className="ml-1 px-1" />  {post.likes}
                                            </span>
                                            <span className="flex items-center text-gray-700"> <MessageCircle className="ml-1 px-1" />{post.comments} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog;
