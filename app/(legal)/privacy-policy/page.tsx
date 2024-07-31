export const metadata = {
  title: "Privacy Policy | CaptainMVP - Your Data Security is Our Priority",
  description:
    "Read CaptainMVP's privacy policy to understand how we collect, use, and protect your personal information. We prioritize your data security and privacy.",
  keywords:
    "privacy policy, data protection, user privacy, CaptainMVP, MVP development",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | CaptainMVP - Your Data Security is Our Priority",
    description:
      "Learn how CaptainMVP collects, uses, and protects your personal information. We prioritize your data security and privacy.",
    type: "website",
    url: "https://www.captainmvp.com/privacy-policy",
  },
};

import PrivacyPolicy from "@/components/privacy-policy";

export default function Home() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
