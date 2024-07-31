import Image from "next/image";

export default function Zigzag() {
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-4 md:pt-4 border-t border-gray-800">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h2 mb-4 text-purple-400">
                Projects We've Worked On
              </h1>
              <p className="text-xl text-white">
                Here are some examples of MVPs we've built for our clients in
                just 5 weeks
              </p>
            </div>

            {/* Items */}
            <div className="grid gap-20">
              {/* 1st item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src={
                      "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424428/CaptainMVP/static_assets_website/koggcgly0ywmghwzkrd9.jpg"
                    }
                    width={540}
                    height={405}
                    alt="Features 01"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-right"
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3 text-purple-400">Rotuto</h3>
                    <p className="text-xl text-white mb-4">
                      Rotuto leverages advanced AI technologies, integrating
                      APIs from OpenAI and Groq for powerful language
                      processing.<br></br> <br></br> We've incorporated
                      Llama-3-8B specifically for our resume screening module,
                      ensuring accurate candidate assessment. For secure and
                      reliable payments, we use Stripe's processing system.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2nd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src={
                      "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424427/CaptainMVP/static_assets_website/uuqerju8xydtmflhuzml.jpg"
                    }
                    width={540}
                    height={405}
                    alt="Features 02"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-left"
                >
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <h3 className="h3 mb-3 text-purple-400">Tavisa</h3>
                    <p className="text-xl text-white mb-4">
                      We are currently developing a mobile app for Tavisa,
                      tailored for our London-based client. <br></br> <br></br>
                      This app is designed to interface seamlessly with a
                      specialized device via Bluetooth Low Energy (BLE)
                      technology. The application's primary function is to
                      retrieve vital pulse data from the connected device and
                      present it in a clear, user-friendly format on the mobile
                      screen.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3rd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src={
                      "https://res.cloudinary.com/datpuqoo6/image/upload/v1722424427/CaptainMVP/static_assets_website/cgfjvqp5me4lpezscay3.jpg"
                    }
                    width={540}
                    height={405}
                    alt="Features 03"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-right"
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3 text-purple-400">Sygnal</h3>
                    <p className="text-xl text-white mb-4">
                      Sygnal is a company that offers custom, programmable LED
                      T-shirts. We built their e-commerce website, which allows
                      customers to order these unique T-shirts online.<br></br>{" "}
                      <br></br>
                      The backend application we developed processes orders
                      efficiently, ensuring a seamless shopping experience for
                      their customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
