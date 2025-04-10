import FaveIcon from "../(globals)/FaveIcon";

import Image from "next/image";

const AnimalsCard = ({ id, photos, name, age, breeds }) => {
  const photo = photos?.[0]?.small;

  return (
    <li
      key={id}
      className="flex flex-col gap-2 rounded-2xl bg-[#ffffff] shadow-sm"
    >
      {photo ? (
        <Image
          alt={`Billede af ${name}`}
          width={100}
          height={100}
          src={photo}
          className="rounded-2xl w-40 h-28 object-cover"
        />
      ) : (
        <div className="flex w-40 h-28 bg-slate-300 rounded-2xl items-center justify-center object-cover">
          <h3>no image</h3>
        </div>
      )}
      <div className="p-3">
        <div className="flex justify-between">
          <h3>{name}</h3>
          <p className="text-[#ADADAD]">{age}</p>
        </div>
        <p className="text-[#ADADAD]">{breeds?.primary}</p>
      </div>
    </li>
  );
};

export default AnimalsCard;
