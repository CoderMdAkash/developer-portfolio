// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-10 md:pb-10 lg:pt-10">
          <h1 className="text-2xl md:text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.4rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={25} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={25} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={25} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={25} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={25} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
         
          
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-2 md:px-4 lg:px-8 py-4 lg:py-6">
              <div className="rounded-2xl p-6 shadow-xl">
  
                <h3 className="text-white text-xl font-semibold mb-6">
                  What I Work With
                </h3>

                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
                  <span className="tech-badge bg-white/3 text-white text-sm px-2 md:px-4 py-2 rounded-lg border border-[#5453535c] hover:border-cyan-400 hover:text-cyan-400 transition duration-300 text-center">Laravel</span>
                  <span className="tech-badge bg-white/3 text-white text-sm px-2 md:px-4 py-2 rounded-lg border border-[#5453535c] hover:border-cyan-400 hover:text-cyan-400 transition duration-300 text-center">React</span>
                  <span className="tech-badge bg-white/3 text-white text-sm px-2 md:px-4 py-2 rounded-lg border border-[#5453535c] hover:border-cyan-400 hover:text-cyan-400 transition duration-300 text-center">Next.js</span>
                  <span className="tech-badge bg-white/3 text-white text-sm px-2 md:px-4 py-2 rounded-lg border border-[#5453535c] hover:border-cyan-400 hover:text-cyan-400 transition duration-300 text-center">MySQL</span>
                  <span className="tech-badge bg-white/3 text-white text-sm px-2 md:px-4 py-2 rounded-lg border border-[#5453535c] hover:border-cyan-400 hover:text-cyan-400 transition duration-300 text-center">MongoDB</span>
                  <span className="tech-badge bg-white/3 text-white text-sm px-2 md:px-4 py-2 rounded-lg border border-[#5453535c] hover:border-cyan-400 hover:text-cyan-400 transition duration-300 text-center">Etc.</span>
                </div>


                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-cyan-400">4+</p>
                    <p className="text-sm text-gray-400">Years Exp</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-pink-400">60+</p>
                    <p className="text-sm text-gray-400">Projects</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-400">100%</p>
                    <p className="text-sm text-gray-400">Dedication</p>
                  </div>
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;