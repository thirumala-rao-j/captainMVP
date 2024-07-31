export const metadata = {
  title: "CaptainMVP: Build Your Web or Mobile MVP in 5 Weeks",
  description:
    "CaptainMVP builds web and mobile MVPs in just 5 weeks. Launch your startup idea quickly with our expert team. No tech knowledge required. Get started today!",
  keywords:
    "MVP development, startup, web app, mobile app, quick launch, prototype, MERN stack, Flutter",
  openGraph: {
    title: "CaptainMVP: Build Your Web or Mobile MVP in 5 Weeks",
    description:
      "Launch your startup idea quickly with our expert team. We build web and mobile MVPs in just 5 weeks. No tech knowledge required.",
    type: "website",
    url: "https://www.captainmvp.com",
    images: [
      {
        url: "https://www.captainmvp.com/og-image.jpg",
        alt: "CaptainMVP Open Graph Image",
      },
    ],
  },
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Zigzag from "@/components/zigzag";
import FAQ from "@/components/faq";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Zigzag />
      <FAQ />
    </>
  );
}
