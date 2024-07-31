// pages/contact-us.tsx

import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-E1E1E1 mt-20">
      <div className="bg-white text-black rounded-lg p-8 max-w-6xl w-full mx-4">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Terms and Conditions
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Last Updated: Jul 31, 2024
        </p>
        <div className="space-y-6 text-gray-700">
          <p>
            Welcome to CaptainMVP, operated by Neonflake Enterprises OPC Pvt Ltd
            based in India! These terms and conditions outline the rules and
            regulations for the use of our website and services.
          </p>

          <div>
            <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
            <p>
              By accessing this website, you agree to be bound by these terms
              and conditions. If you do not agree with any part of these terms,
              please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Services</h2>
            <p>
              CaptainMVP provides web and mobile app development services. Our
              goal is to deliver a Minimum Viable Product (MVP) within 5 weeks,
              based on the specifications agreed upon during the initial
              consultation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Payment Terms</h2>
            <p>
              Our pricing options include a one-time payment of $5000 upfront or
              a weekly payment plan of $1100/week for 5 weeks. Payments must be
              made in advance to initiate the project.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Project Timeline</h2>
            <p>
              We strive to complete projects within the specified 5-week
              timeline. However, project completion may be delayed due to
              unforeseen circumstances. We will communicate any delays and work
              to minimize their impact.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Intellectual Property</h2>
            <p>
              All intellectual property rights for the developed MVP remain with
              CaptainMVP until full payment is received. Upon full payment, all
              rights will be transferred to the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Confidentiality</h2>
            <p>
              We respect your confidentiality and will not disclose any
              information related to your project without your permission.
              Similarly, you agree not to disclose any confidential information
              provided by us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
            <p>
              CaptainMVP is not liable for any direct, indirect, incidental, or
              consequential damages arising from the use of our services. Our
              liability is limited to the amount paid for the service in
              question.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Termination</h2>
            <p>
              We reserve the right to terminate or suspend our services if you
              breach these terms and conditions. Upon termination, you must
              cease all use of our services and destroy any copies of materials
              obtained through our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of India. The courts in Hyderabad,
              Telangana, India have exclusive jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Changes to Terms and Conditions
            </h2>
            <p>
              We may revise these terms and conditions at any time. By
              continuing to use our website and services, you agree to be bound
              by the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              For any questions or concerns regarding these terms and
              conditions, please contact us at{" "}
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

export default TermsAndConditions;
