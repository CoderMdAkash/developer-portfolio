// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            Hi, I’m Md Akash Mia 👋<br />
            A results-driven Software Developer with hands-on experience in PHP, Laravel, JavaScript, and React, specializing in RESTful APIs, MVC architecture, and scalable system design. I enjoy working with relational databases, optimizing queries, and building performance-focused web applications.
            <br />
            I thrive in collaborative, agile environments, contribute to clean and maintainable codebases, and continuously explore modern web technologies, best practices, and system optimization techniques. Open to opportunities where I can deliver impactful, high-quality digital solutions 🚀
          </p>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2 pt-5">
          <img
            src={personalData.profile}
            alt="Md Akash Mia"
            className="w-[280px] h-[fit-content] rounded-lg overflow-hidden transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;