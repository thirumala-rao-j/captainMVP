export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 md:py-4">
          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-12 md:pb-12">
            <p className="text-xl text-white">
              At captainMVP, we specialize in turning your ideas into reality.
              We build robust Minimum Viable Products (MVPs) for web and mobile
              applications, helping startups and entrepreneurs validate their
              concepts quickly and efficiently.
            </p>
          </div>

          <div className="pt-12 md:pt-12 border-t border-gray-800"></div>

          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-purple-400">
              What is our approach of building an MVP?
            </h2>
            <p className="text-xl text-white">
              At captainMVP, we've refined our process to deliver high-quality
              MVPs efficiently. Our approach is built on three key pillars:
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-300"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg>
              <h4 className="h4 mb-2 text-purple-400">Lean Development</h4>
              <p className="text-lg text-white text-center">
                We prioritize essential features to speed up development and
                ensure a user-focused, efficient market entry.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-current text-purple-600"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  className="stroke-current text-purple-100"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-300"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="h4 mb-2 text-purple-400">Agile Methodology</h4>
              <p className="text-lg text-white text-center">
                We use agile principles to ensure flexibility with weekly
                sprints, client feedback, and adaptability based on new
                insights.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <ellipse
                    className="stroke-current text-purple-300"
                    cx="11"
                    cy="11"
                    rx="5.5"
                    ry="11"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    d="M11 0v22M0 11h22"
                  />
                  <circle
                    className="stroke-current text-purple-100"
                    cx="11"
                    cy="11"
                    r="11"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-purple-400">
                Future-Proof Architecture
              </h4>
              <p className="text-lg text-white text-center">
                While building quickly, we maintain quality with scalable
                architecture, best practices, and robust technologies like the
                MERN stack and Flutter.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center pb-12 md:pb-12 pt-8">
          <p className="text-lg text-white">
            This three-pronged approach allows us to deliver a market-ready MVP
            in just 5 weeks, providing you with a solid foundation to validate
            your idea and grow your business.
          </p>
        </div>
        <div className="border-t border-gray-800"></div>
      </div>
    </section>
  );
}
