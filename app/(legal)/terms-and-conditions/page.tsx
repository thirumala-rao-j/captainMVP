export const metadata = {
  title:
    "Terms and Conditions | CaptainMVP - Clear Guidelines for Our Services",
  description:
    "Review CaptainMVP's terms and conditions to understand our service agreement, user responsibilities, and legal obligations when using our MVP development services.",
  keywords:
    "terms and conditions, service agreement, legal, CaptainMVP, MVP development",
  robots: "index, follow",
  openGraph: {
    title:
      "Terms and Conditions | CaptainMVP - Clear Guidelines for Our Services",
    description:
      "Understand our service agreement, user responsibilities, and legal obligations when using CaptainMVP's MVP development services.",
    type: "website",
    url: "https://www.captainmvp.com/terms-and-conditions",
  },
};

import TermsAndConditions from "@/components/terms-conditions";

export default function Home() {
  return (
    <>
      <TermsAndConditions />
    </>
  );
}
