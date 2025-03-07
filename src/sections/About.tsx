import logo from "../assets/images/lofie.ico";
import data from "../types/data";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 lg:min-h-screen lg:flex lg:justify-center lg:items-center">
      <div className="about-container md:p-6 md:flex md:gap-x-5 lg:mx-auto lg:max-w-screen-lg ">
        <div className="image-container hidden md:flex md:w-1/3">
          <img
            src={logo}
            alt={data.name}
            className="w-full max-w-xs object-contain mx-auto"
          />
        </div>
        <div className="text-container flex flex-col md:w-2/3">
          <div className="title-about px-4">
            <h1 className="font-extrabold text-6xl text-primary font-primary uppercase">
              {data.name}
            </h1>
            <h2 className="font-bold text-xl font-secondary tracking-[0.33em]">
              HOMEMADE
            </h2>
          </div>
          <div className="image-mobile mt-15 md:hidden">
            <img
              src={logo}
              alt={data.name}
              className="mx-auto w-1/2 md:hidden"
            />
          </div>
          <div className="desc-about mt-5 p-4">
            <p className="text-justify font-tertiary">
              Kami merupakan usaha rumahan yang menghadirkan makanan lezat
              dengan bahan berkualitas dan cita rasa autentik. Saat ini, kami
              fokus pada donat lembut yang dibuat fresh dengan sistem pre-order,
              memastikan kualitas terbaik di setiap gigitan.
            </p>
          </div>
          <div className="rating-about mt-3 p-4 flex items-center justify-center">
            <div className="pesanan-container flex flex-col items-center justify-center w-1/3">
              <h1 className="font-bold font-tertiary text-2xl md:text-3xl ">
                100+
              </h1>
              <p className="font-tertiary text-gray-700">Pesanan</p>
            </div>
            <div className="ulasan-container flex flex-col items-center justify-center w-1/3">
              <h1 className="font-bold font-tertiary text-2xl md:text-3xl ">
                4.9
              </h1>
              <p className="font-tertiary text-gray-700">Ulasan</p>
            </div>
            <div className="layanan-container flex flex-col items-center justify-center w-1/3">
              <h1 className="font-bold font-tertiary text-2xl md:text-3xl ">
                100%
              </h1>
              <p className="font-tertiary text-gray-700">Layanan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
