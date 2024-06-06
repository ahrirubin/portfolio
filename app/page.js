"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import Image from "next/image";
import deved from "/public/catto.png";
import design from "/public/design.png";
import code from "/public/code.png";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ahri Rubin Portfolio</title>
        <meta name="description" content="Generated by crea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-bold dark:text-slate-400">
              AHRI RUBIN
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-slate-400"
                />
              </li>
              <li>
                <a
                  className="cursor-pointer bg-gradient-to-r from-cyan-500
                   to-teal-500 text-white px-4 py-2 
                  rounded-md ml-8 font-semibold"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-semibold md:text-6xl md:font-bold">
              Ahri Rubin
            </h2>
            <h3 className="text-2xl py-2 font-semibold md:text-3xl dark:text-slate-200">
              Developer and designer.
            </h3>
            <p
              className="font-semibold text-md py-5 leading-8 text-gray-600 md:text-xl 
            max-w-lg mx-auto dark:text-slate-400 "
            >
              Freelancer providing services for programming and design content
              needs. Join me below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 dark:text-slate-400">
            <AiFillTwitterCircle href="#" className="cursor-pointer" />
            <AiFillLinkedin href="#" className="cursor-pointer" />
            <AiFillGithub href="#" className="cursor-pointer" />
            <AiFillMail href="#" className="cursor-pointer" />
          </div>
          <div
            className="relative bg-gradient-to-b from-teal-500 rounded-full
          w-60 h-60 mt-20 mx-auto overflow-hidden md:h-80 md:w-80"
          >
            <Image
              src={deved}
              objectFit="cover"
              className=" w-[180px] mt-16 ml-4 md:w-[240px] md:mt-20 md:ml-6 "
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 font-semibol0 dark:text-slate-200 ">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-600 font-semibold md:max-w-8xl dark:text-slate-400">
              Since the beginning of my journey as a Freelancer developer, I've
              done remote work for
              <span className="text-teal-500 font-semibold"> agencies</span>,
              consulted for
              <span className="text-teal-500 font-semibold"> starups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-600 font-semibold dark:text-slate-400">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className="lg:flex lg:gap-10 lg:justify-around">
            <div className="text-center shadow-lg p10 rounded-xl my-10 lg:w-[500px] ">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-semibold pt-8 pb-2 dark:text-slate-200">
                Beautiful Designs
              </h3>
              <p className="py-2 px-2 dark:text-slate-400">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600 lg:pt-10">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-slate-400">
                Photoshop
              </p>
              <p className="text-gray-800 py-1 dark:text-slate-400">Canva</p>
              <p className="text-gray-800 py-1 pb-10 dark:text-slate-400">
                Figma
              </p>
            </div>

            <div className="text-center shadow-lg p10 rounded-xl my-10 lg:w-[500px]  ">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-semibold pt-8 pb-2 dark:text-slate-200">
                Accessible Code
              </h3>
              <div className="">
                <p className="pt-2 px-2 dark:text-slate-400 ">
                  Creating code that is straightforward and easy to understand
                  to make it easy to alter to your specific needs.
                </p>
                <h4 className="py-4 text-teal-600 lg:pt-12">Developed with</h4>
                <p className="text-gray-800 py-1 dark:text-slate-400">React</p>
                <p className="text-gray-800 py-1 dark:text-slate-400">
                  Javascript
                </p>
                <p className="text-gray-800 py-1 pb-10 dark:text-slate-400">
                  Nextjs
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=" md:flex">
            <div className="flex flex-col md:pb-5">
              <Image className="p-5 w-full mx-auto" src={web1} />
              <div className="md:px-10">
                <h3 className="text-2xl md:text-3xl py-1 text-teal-600 lg:font-semibold">
                  My portfolio
                </h3>
                <p
                  className="text-md py-2 leading-8 text-gray-600 pb-10 font-semibold 
                md:max-w-8xl dark:text-slate-400"
                >
                  As an assignment, i created a mock-up portfolio using react
                  and tailwind. I followed developedbyed's tutorial.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:pb-5">
              <Link
                href={
                  "https://chas-redesign-git-main-ahrirubins-projects.vercel.app/"
                }
              >
                <Image className="p-5 w-full mx-auto" src={web2} />
              </Link>
              <div className="md:px-10">
                <h3 className="text-2xl md:text-3xl py-1 text-[#BA68C8] lg:font-semibold">
                  Zoom re-design
                </h3>
                <p className="text-md py-2 leading-8 text-gray-600 pb-10 font-semibold md:max-w-8xl dark:text-slate-400">
                  As an assignment, i recreated the Zoom homepage following
                  design rules and colors/pictures to evoke emotion, in this
                  case it is meant to feel playful.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:pb-5">
              <Link href={"https://tailwind-ahrirubins-projects.vercel.app/ "}>
                <Image className="p-5 w-full mx-auto" src={web3} />
              </Link>
              <div className="md:px-10">
                <h3 className="text-2xl md:text-3xl py-1 text-slate-900 lg:font-semibold dark:text-slate-200">
                  Recreate tailwind
                </h3>
                <p className="text-md py-2 leading-8 text-gray-600 pb-10 font-semibold md:max-w-8xl dark:text-slate-400">
                  As an assignment, i recreated a section of tailwind's homepage
                  to get familiar with using tailwind instead of css.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
