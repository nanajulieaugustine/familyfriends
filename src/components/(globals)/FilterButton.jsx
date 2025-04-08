const FilterButton = () => {
  return (
    <div className="ltr ps-0">
      <div className="flex overflow-x-auto gap-2  snap-x scroll-ps-6">
        <button className="rounded-3xl border-1 px-6 py-2 cursor-pointer border-[#CACACD]">
          Alle
        </button>
        <button className="rounded-3xl border-1 px-6 py-2 cursor-pointer border-[#CACACD]">
          Katte
        </button>
        <button className="rounded-3xl border-1 px-6 py-2 cursor-pointer border-[#CACACD]">
          Hunde
        </button>

        <button className="rounded-3xl border-1 px-6 py-2 cursor-pointer border-[#CACACD]">
          Hunde
        </button>
        <button className="rounded-3xl border-1 px-6 py-2 cursor-pointer border-[#CACACD]">
          Hunde
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
