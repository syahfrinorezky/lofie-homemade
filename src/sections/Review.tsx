import { useState, useEffect } from "react";
import { ReviewDonut } from "../utils/reviewPeoples";
import StarRating from "../components/StarRating";
import {
  FaQuoteLeft,
  FaUser,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function Review() {
  const [showAll, setShowAll] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const reviewsToDisplay =
    showAll || isMediumScreen ? ReviewDonut : ReviewDonut.slice(0, 3);

  return (
    <section id="review" className="py-20">
      <div className="review-container lg:max-w-screen-lg lg:mx-auto">
        <div className="title-container px-4 md:px-8">
          <h1 className="text-3xl font-bold font-primary tracking-wide">
            Menurut <span className="text-primary">mereka</span>?
          </h1>
          <h2 className="font-tertiary text-justify mt-2">
            Menurut mereka tentang makanan kami sih begini...
          </h2>
        </div>

        <div className="main-container px-4 md:px-8">
          <div className="review-page mt-15 flex flex-col items-center justify-center gap-y-3 md:grid md:grid-cols-3 md:gap-x-4">
            {reviewsToDisplay.map((item) => (
              <div
                key={item.id}
                className="review-box p-4 shadow-gray-500 w-full h-full flex flex-col rounded-md shadow-md">
                <div className="flex items-center">
                  <FaQuoteLeft className="text-xl text-primary md:text-2xl" />
                </div>
                <div className="feedback-container">
                  <p className=" mt-4">{item.feedback}</p>
                </div>

                <div className="flex h-full items-end mt-5">
                  <span className="flex bg-gray-400 p-4 rounded-full mr-3">
                    <FaUser className="text-white" />
                  </span>
                  <div className="flex flex-col justify-end h-full">
                    <h1 className="font-bold uppercase font-tertiary">
                      {item.name}
                    </h1>
                    <div className="flex gap-x-2 items-end">
                      <StarRating rating={item.rating} />
                      <h2>({item.rating.toFixed(1)})</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!isMediumScreen && (
            <div className="flex justify-center mt-10 ">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-primary w-full text-white px-4 py-2 rounded-md flex items-center justify-center font-bold uppercase font-tertiary gap-x-2">
                {showAll ? <FaChevronUp /> : <FaChevronDown />}
                {showAll ? "Sembunyikan" : "Tampilkan"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
