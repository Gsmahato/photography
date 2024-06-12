import aboutme from "../assets/aboutme.webp";
import { ArrowRight } from "lucide-react";

function About() {
  return (
    <>
      <div className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
              <img
                src={aboutme}
                alt="Placeholder"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '600px' }}
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="px-4 md:px-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  We Believe that<br />
                  Interior beautifies the
                </h1>
                <p className="mb-6 text-black/80">
                  Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.
                </p>
                <button className="flex items-center mt-4 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 text-white rounded-full uppercase shadow-md hover:from-purple-500 hover:to-green-500 focus:outline-none focus:ring focus:ring-purple-400 focus:ring-opacity-50">
                  Hire me now
                  <span className="pl-4"><ArrowRight /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
