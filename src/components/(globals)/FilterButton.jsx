"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const FilterButton = () => {
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState("All");
  const [activeColor] = useState("border-[#CACACD]");

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex overflow-x-auto ps-0 gap-3 hide-scrollbar">
      <button
        onClick={() => handleClick("All")}
        className={`rounded-3xl border-1 pl-6 pr-10 gap-1 py-2 cursor-pointer border-[#CACACD] flex flex-row items-center justify-between ${
          selectedItem === "All"
            ? "bg-[#F2968F] border-[#F2968F] text-[#FFF]"
            : "border-[#CACACD]"
        }`}
      >
        <Image
          alt="billede af kat og hund"
          src="/All.png"
          width="500"
          height="500"
        />
        Alle
      </button>

      <button
        onClick={() => handleClick("Cats")}
        className={`rounded-3xl border-1 gap-1 pl-6 pr-10 py-2 cursor-pointer border-[#CACACD] flex flex-row items-center justify-between ${
          selectedItem === "Cats"
            ? "bg-[#F2968F] border-[#F2968F] text-[#FFF]"
            : "border-[#CACACD]"
        }`}
      >
        <Image alt="billede af kat" src="/Cats.png" width="500" height="500" />
        Katte
      </button>

      <button
        onClick={() => handleClick("Dogs")}
        className={`rounded-3xl border-1 pl-6 pr-10 gap-1 py-2 cursor-pointer border-[#CACACD] flex flex-row items-center justify-between ${
          selectedItem === "Dogs"
            ? "bg-[#F2968F] border-[#F2968F] text-[#FFF]"
            : "border-[#CACACD]"
        }`}
      >
        <Image alt="billede af hund" src="/Dogs.png" width="500" height="500" />
        Hunde
      </button>
    </div>
  );
};

export default FilterButton;
