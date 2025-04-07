const FilterButton = () => {
  return (
    <div className="flex overflow-x-auto gap-2">
      <button className="rounded-2xl border-1 px-4 py-1 cursor-pointer">
        <img className="rounded-5xl" src="" alt="" />
        Alle
      </button>
      <button className="rounded-2xl border-1 px-4 py-1 cursor-pointer">
        <img className="rounded-5xl" src="" alt="" />
        Katte
      </button>
      <button className="rounded-2xl border-1 px-4 py-1 cursor-pointer">
        <img className="rounded-5xl" src="" alt="" />
        Hunde
      </button>
    </div>
  );
};

export default FilterButton;
