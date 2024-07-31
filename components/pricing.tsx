// components/Pricing.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Pricing: React.FC = () => {
  const [isWeekly, setIsWeekly] = useState(true);

  const handleWeeklyClick = () => setIsWeekly(true);
  const handleOneTimeClick = () => setIsWeekly(false);

  return (
    <div className="bg-E1E1E1 text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-purple-400">
        Our Services & Pricing
      </h1>
      <p className="text-lg md:text-xl text-center">
        We offer two types of applications - Mobile & Web-based
      </p>
      <p className="text-lg md:text-xl mb-8 text-center">
        We complete your MVP in <span className="font-bold">5 weeks</span>
      </p>

      <div className="space-y-8">
        {/* Mobile Application Section */}
        <div className="bg-purple-600 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center">
            <div className="mb-6 lg:mb-0 flex-1 lg:pr-6">
              <div className="flex flex-col lg:flex-row flex-wrap justify-start mb-8">
                <span className="flex flex-row items-center mb-4">
                  <Image
                    src={
                      "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424427/CaptainMVP/static_assets_website/f8exf4iygkkmunjuh9jq.png"
                    }
                    alt="Mobile Icons"
                    className="mr-4 max-w-[25px] h-auto"
                    height={20}
                    width={25}
                  />
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    Mobile Application
                  </h2>
                </span>
                <div className="flex flex-col justify-center w-full lg:w-auto">
                  <p className="bg-white text-black font-bold rounded-md inline-block px-4 py-2 w-full">
                    Built using Google Flutter
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-800 mb-4"></div>
              <div className="space-y-4 bg-white rounded-md w-full text-black p-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                  What's Included
                </h3>
                <ul className="list-none space-y-2 text-black">
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    Weekly progress updates
                  </li>
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    Transparent pricing - no surprise fee
                  </li>
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    Handover of all code and accounts upon completion
                  </li>
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    1 week of Post-launch support
                  </li>
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    Industry-standard product quality
                  </li>
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    Efficient communication - no time-wasting meetings
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white text-black rounded-lg w-full lg:w-[460px] h-auto lg:h-[410px] p-6 lg:p-8 mt-6 lg:mt-0">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left">
                Payment Plan
              </h3>
              <p className="text-lg font-bold mb-4 text-center lg:text-left">
                Choose the plan that works best for you
              </p>
              <div className="bg-white text-black text-start">
                <div className="flex justify-center lg:justify-start mb-4">
                  <button
                    className={`px-4 py-2 rounded-l-full transition duration-200 ${
                      isWeekly
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={handleWeeklyClick}
                  >
                    Weekly
                  </button>
                  <button
                    className={`px-4 py-2 rounded-r-full transition duration-200 ${
                      isWeekly
                        ? "bg-gray-200 text-black"
                        : "bg-blue-500 text-white"
                    }`}
                    onClick={handleOneTimeClick}
                  >
                    One-time
                  </button>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-center lg:text-left">
                  {isWeekly ? "$1,100/week" : "$5,000"}
                </p>
                {isWeekly && (
                  <p className="text-sm text-black font-bold text-center lg:text-left">
                    Pause or cancel anytime
                  </p>
                )}
                <div className="border-t border-gray-800 mt-8"></div>
                <Link
                  href={
                    process.env.CAPTAINMVP_CALENDLY_LINK ||
                    "https://calendly.com/hello-captainmvp/30min"
                  }
                >
                  <button className="bg-black text-white px-6 py-2 rounded-full mt-8 hover:bg-gray-800 transition duration-200 block mx-auto lg:mx-0">
                    Book an Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Web-based Application Section */}
        <div className="bg-purple-600 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center">
            <div className="mb-6 lg:mb-0 flex-1 lg:pr-6">
              <div className="flex flex-col lg:flex-row flex-wrap justify-start mb-8">
                <span className="flex flex-row items-center mb-4">
                  <Image
                    src={
                      "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424427/CaptainMVP/static_assets_website/cqraxtsrrw5v9feksuee.png"
                    }
                    alt="Desktop Icons"
                    className="mr-4 max-w-[30px] w-full h-auto md:h-[30px] lg:h-[30px]"
                    height={25}
                    width={25}
                  />
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    Web-based Application
                  </h2>
                </span>
                <div className="flex flex-col justify-center w-full lg:w-auto">
                  <p className="bg-white text-black font-bold rounded-md inline-block px-4 py-2 w-full">
                    Built using ReactJS, NodeJS, ExpressJS, and MongoDB
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-800 mb-4"></div>
              <div className="space-y-4 bg-white rounded-md w-full text-black p-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                  What's Included
                </h3>
                <ul className="list-none space-y-2 text-black">
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    Weekly progress updates
                  </li>
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    Transparent pricing - no surprise fee
                  </li>
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    Handover of all code and accounts upon completion
                  </li>
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    1 week of Post-launch support
                  </li>
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    Industry-standard product quality
                  </li>
                  <li className="flex items-center">
                    <Image
                      src={
                        "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/moyesxu5fehiv1gmqygg.jpg"
                      }
                      width={16}
                      height={16}
                      alt="Tickmark"
                      className="mr-2 max-w-[20px] w-auto h-auto"
                    />
                    Efficient communication - no time-wasting meetings
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white text-black rounded-lg w-full lg:w-[460px] h-auto lg:h-[410px] p-6 lg:p-8 mt-6 lg:mt-0">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left">
                Payment Plan
              </h3>
              <p className="text-lg font-bold mb-4 text-center lg:text-left">
                Choose the plan that works best for you
              </p>
              <div className="bg-white text-black text-start">
                <div className="flex justify-center lg:justify-start mb-4">
                  <button
                    className={`px-4 py-2 rounded-l-full transition duration-200 ${
                      isWeekly
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={handleWeeklyClick}
                  >
                    Weekly
                  </button>
                  <button
                    className={`px-4 py-2 rounded-r-full transition duration-200 ${
                      isWeekly
                        ? "bg-gray-200 text-black"
                        : "bg-blue-500 text-white"
                    }`}
                    onClick={handleOneTimeClick}
                  >
                    One-time
                  </button>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-center lg:text-left">
                  {isWeekly ? "$1,100/week" : "$5,000"}
                </p>
                {isWeekly && (
                  <p className="text-sm text-black font-bold text-center lg:text-left">
                    Pause or cancel anytime
                  </p>
                )}
                <div className="border-t border-gray-800 mt-8"></div>
                <Link
                  href={
                    process.env.CAPTAINMVP_CALENDLY_LINK ||
                    "https://calendly.com/hello-captainmvp/30min"
                  }
                >
                  <button className="bg-black text-white px-6 py-2 rounded-full mt-8 hover:bg-gray-800 transition duration-200 block mx-auto lg:mx-0">
                    Book an Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
