export const metadata = {
  title: "Contact CaptainMVP | Get in Touch for MVP Development",
  description:
    "Have questions about MVP development? Contact CaptainMVP today. We're here to help you bring your web or mobile app idea to life in just 5 weeks.",
  keywords:
    "contact, MVP development, web app, mobile app, startup, CaptainMVP",
  robots: "index, follow",
  openGraph: {
    title: "Contact CaptainMVP | Get in Touch for MVP Development",
    description:
      "Reach out to CaptainMVP for questions about MVP development. We're ready to help bring your web or mobile app idea to life in just 5 weeks.",
    type: "website",
    url: "https://www.captainmvp.com/contact-us",
  },
};

import ContactUs from "@/components/contact-us";

export default function Home() {
  return (
    <>
      <ContactUs />
    </>
  );
}
