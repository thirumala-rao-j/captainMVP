import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
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

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href={
                    process.env.CAPTAINMVP_CALENDLY_LINK ||
                    "https://calendly.com/hello-captainmvp/30min"
                  }
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Book an appointment
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
