import React from "react";
import Link from "next/link";

import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <Image
                    src={
                      "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424427/CaptainMVP/static_assets_website/qehvy9bhxtl1wjobqwwk.png"
                    }
                    alt="Logo"
                    width={165.23}
                    height={32}
                  />
                </Link>
              </div>
              <div className="text-gray-400">
                CaptainMVP builds web and mobile app prototypes in 5 weeks to
                help you test your business idea quickly
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Pages</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href={
                        process.env.CAPTAINMVP_CALENDLY_LINK ||
                        "https://calendly.com/hello-captainmvp/30min"
                      }
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Book an appointment
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Legal</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/privacy-policy"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/terms-and-conditions"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/contact-us"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Social Media</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="https://x.com/teamcaptainmvp"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      X
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="https://www.facebook.com/TeamCaptainMVP/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="https://www.instagram.com/teamcaptainmvp"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href=" https://www.linkedin.com/showcase/captainmvp/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyrights note */}
          <div className="text-gray-400 text-sm mr-4">
            &copy; Neonflake Enterprises (OPC) Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
