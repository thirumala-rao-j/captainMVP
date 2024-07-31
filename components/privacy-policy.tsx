// pages/PrivacyPolicy.tsx

import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-E1E1E1 mt-20">
      <div className="bg-white text-black rounded-lg p-8 max-w-6xl w-full mx-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
        <p className="text-gray-500 text-center mb-8">
          Last Updated: Jul 31, 2024
        </p>

        <div className="space-y-6 text-gray-700">
          <p>
            At CaptainMVP, operated by Neonflake Enterprises OPC Pvt Ltd based
            in India, we are committed to protecting your privacy. This policy
            outlines how we collect, use, and safeguard your personal
            information.
          </p>

          <div>
            <h2 className="text-2xl font-semibold">
              Information Collection and Use
            </h2>
            <p>
              We collect information you provide when you sign up for our
              services, such as your name, email address, and payment details.
              This information is used to process your orders, manage your
              account, and communicate with you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Cookies and Tracking Technologies
            </h2>
            <p>
              Our website uses cookies to enhance your experience. Cookies help
              us understand how you use our site and improve its functionality.
              You can disable cookies through your browser settings, but this
              may affect your ability to use certain features of our site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except when required by law or to
              protect our rights. We may share information with trusted third
              parties who assist us in operating our website and conducting our
              business, provided they agree to keep this information
              confidential.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information. However, no method of transmission
              over the internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. These sites
              have separate and independent privacy policies. We have no
              responsibility or liability for the content and activities of
              these linked sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update our privacy policy from time to time. We will notify
              you of any changes by posting the new policy on our website. You
              are advised to review this policy periodically for any changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please
              contact us at{" "}
              <a href="mailto:hello@captainmvp.com" className="text-blue-500">
                hello@captainmvp.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
