import { FaLeaf, FaHotjar, FaBreadSlice } from "react-icons/fa";

export const highlights = [
  {
    icon: FaLeaf,
    title: "Alami",
    description: "Terbuat dari bahan alami tanpa pengawet.",
  },
  {
    icon: FaHotjar,
    title: "Fresh",
    description: "Selalu dibuat segar setiap hari.",
  },
  {
    icon: FaBreadSlice,
    title: "Berkualitas",
    description: "Menggunakan bahan premium terbaik.",
  },
];

export default function Highlight() {
  return (
    <div className="bg-primary px-4 py-10">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-2 max-w-4xl mx-auto">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 aspect-[5/6] bg-white rounded-lg shadow-lg text-center">
              <Icon className="text-3xl text-gray-800 mb-4" />
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 hidden">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
