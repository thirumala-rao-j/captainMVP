// components/FAQ.tsx

import React from "react";

const FAQ: React.FC = () => {
  return (
    <>
      <div className="bg-E1E1E1 text-white p-6 md:p-12 text-start max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-purple-400">
          FAQs
        </h1>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 text-purple-400">
              We know nothing about tech, can you still help us?
            </h4>
            <p className="text-white">
              Absolutely! Our team handles all the technical aspects. We'll
              guide you through the process, explain things in simple terms, and
              focus on bringing your idea to life. Your expertise in your
              business idea is what matters most.
            </p>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 text-purple-400">
              Can it take longer than 5 weeks?
            </h4>
            <p className="text-white">
              Our process is designed to deliver MVPs in 5 weeks. However, if
              your project has complex requirements, it might take longer. We'll
              discuss this during our initial consultation and be upfront about
              any additional time needed
            </p>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 text-purple-400">
              Do you offer post-launch support?
            </h4>
            <p className="text-white">
              Yes, we provide 1 week of post-launch support included in our
              package. This helps ensure your MVP runs smoothly after launch. If
              you need extended support, we can discuss additional options.
            </p>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 text-purple-400">
              What tech stack do you support?
            </h4>
            <p className="text-white">
              For web applications, we use ReactJS, NodeJS, ExpressJS, and
              MongoDB. For mobile apps, we use Google Flutter.
            </p>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 text-purple-400">
              How involved do I need to be in the development process?
            </h4>
            <p className="text-white">
              We value your input throughout the process. We'll have weekly
              check-ins to show progress and get your feedback. However, we
              handle all the technical work, so you can focus on planning your
              business strategy and preparing for launch.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 max-w-6xl mx-auto"></div>
    </>
  );
};

export default FAQ;
