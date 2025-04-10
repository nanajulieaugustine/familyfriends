import { PiHouse } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";
const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between items-baseline pb-2 bg-[#f9f9fb] pt-2 px-8">
      <PiHouse className="text-gray-400" size={25} />
      <FaRegStar className="text-gray-400" size={25} />
      <FaRegComment className="text-gray-400" size={25} />
      <RxPerson className="text-gray-400" size={25} />
    </div>
  );
};

export default Footer;
