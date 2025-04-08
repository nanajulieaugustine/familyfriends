"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
const FilterButton = () => {
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState("");
  const [activeColor, setActivecolor] = useState("border-[#CACACD]");
  return (
    <div className="flex ltr ps-0 gap-3">
      <button
        onClick={() => setActivecolor(selectedItem)}
        className={`rounded-3xl border-1 px-6 py-2 cursor-pointer border-[#CACACD]" ${
          selectedItem == activeColor
            ? "bg-[#F2968F] border-[#F2968F] text-[#FFF]"
            : " border-[#CACACD]"
        }`}
      >
        Alle
      </button>
      <button
        onClick={() => setActivecolor(selectedItem)}
        className={`rounded-3xl border-1 px-6 py-2 cursor-pointer border-[#CACACD]" ${
          selectedItem == activeColor
            ? "bg-[#F2968F] border-[#F2968F] text-[#FFF]"
            : " border-[#CACACD]"
        }`}
      >
        Katte
      </button>
      <button
        onClick={() => setActivecolor(selectedItem)}
        className={`rounded-3xl border-1 px-6 py-2 cursor-pointer border-[#CACACD]" ${
          selectedItem == activeColor
            ? "bg-[#F2968F] border-[#F2968F] text-[#FFF]"
            : " border-[#CACACD]"
        }`}
      >
        Hunde
      </button>
    </div>
  );
};

export default FilterButton;
