import { menuBundle, menuDonat } from "../utils/menuItems";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import bgSosis from "../assets/images/menu/sosis.jpg";

export default function Menu() {
  return (
    <section id="menu" className="py-20">
      <div className="menu-container lg:max-w-screen-lg lg:mx-auto">
        <div className="title-container text-center p-4 md:p-6">
          <h1 className="text-3xl font-bold font-primary tracking-wide text-primary">
            Menu
          </h1>
          <p className="font-tertiary mt-2">
            Berikut adalah menu yang selalu fresh setiap kali dipesan
          </p>
        </div>

        {/* COMMON MENU */}
        <h1 className="text-center mt-10 text-primary font-bold font-primary text-2xl">
          Donut Bombolone
        </h1>
        <div className="partials-menu px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {menuDonat.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[3/4] bg-cover bg-center rounded-md overflow-hidden transition-transform cursor-pointer duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}>
              <div className="absolute top-3 left-0 z-10">
                <span
                  className="px-4 py-1 rounded-r-full text-white font-semibold font-primary text-lg drop-shadow-xl"
                  style={{ backgroundColor: item.color }}>
                  {item.price / 1000} K
                </span>
              </div>

              <div className="absolute inset-0 flex justify-center items-end bg-black/30 p-2 text-white font-semibold drop-shadow-xl lg:text-lg">
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* BUNDLE MENU */}
        <div className="bundle-menu mt-16">
          <h2 className="text-center text-2xl font-bold font-primary tracking-wide text-primary">
            Bundle Menu
          </h2>
          <div className="bundle-container px-4 md:px-6 flex flex-wrap justify-center gap-4 md:gap-5 mt-8">
            {menuBundle.map((item) => (
              <div
                key={item.id}
                className="relative w-[calc(90%-1rem)] md:w-[calc(50%-1rem)] bg-white shadow-gray-400 shadow-md rounded-lg overflow-hidden transition-transform duration-300 cursor-pointer hover:scale-105">
                <div
                  className="w-full aspect-[16/9] bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  {/* VARIAN MENU */}
                  <div className="variant-container flex flex-col mt-2">
                    <h1 className="text-sm font-medium text-gray-600">
                      Varian:
                    </h1>
                    <div className="variant-menu flex flex-wrap gap-2 mt-1">
                      {(item.variant ?? []).map((v, index) => (
                        <div key={index} className="flex items-center">
                          {/* Wrapper Varian */}
                          <span className="flex items-center gap-1 px-3 py-1 bg-gray-300 rounded-md text-sm">
                            {/* Cek apakah varian adalah "Custom" */}
                            {v.name === "Custom" ? (
                              <div className="flex -space-x-1.5">
                                {(item.variant ?? [])
                                  .filter((varian) => varian.name !== "Custom")
                                  .map((varian, idx) => (
                                    <span
                                      key={idx}
                                      className="w-4 h-4 rounded-full border border-gray-300"
                                      style={{
                                        backgroundColor: varian.color,
                                      }}></span>
                                  ))}
                              </div>
                            ) : (
                              v.color && (
                                <span
                                  className="w-4 h-4 rounded-full border border-gray-300"
                                  style={{ backgroundColor: v.color }}></span>
                              )
                            )}
                            {/* Nama varian */}
                            {v.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="button-po mt-5">
                    <a
                      href="https://wa.me/6287875231592?text=Halo%20kak,%20saya%20ingin%20pesan%20paket%20donat%20bombolonenya%20dengan%20isian%20%3A%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-container flex items-center justify-center w-full bg-green-500 py-2 gap-x-2 rounded-full transition-transform duration-300 hover:scale-105">
                      <ShoppingCartIcon className="w-5 md:w-6 text-white" />
                      <span className="text-white font-bold font-secondary">
                        Pesan Sekarang - {item.price / 1000} K !
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <div className="relative w-[calc(90%-1rem)] md:w-[calc(50%-1rem)] bg-white shadow-gray-400 shadow-md rounded-lg overflow-hidden transition-transform duration-300 cursor-pointer hover:scale-105">
              <div
                className="w-full aspect-[16/9] bg-cover bg-top"
                style={{ backgroundImage: `url(${bgSosis})` }}></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Paket Donut Sosis
                </h3>
                <h4 className="mt-2 text-sm font-medium text-gray-600">
                  Varian : -
                </h4>
                <div className="button-po mt-5 md:mt-31 lg:mt-22">
                  <a
                    href="https://wa.me/6287875231592?text=Halo%20kak,%20saya%20ingin%20pesan%20paket%20donat%20sosisnya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-container flex items-center justify-center w-full bg-green-500 py-2 gap-x-2 rounded-full transition-transform duration-300 hover:scale-105">
                    <ShoppingCartIcon className="w-6 text-white" />
                    <span className="text-white font-bold font-secondary">
                      Pesan Sekarang - 15 K !
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
