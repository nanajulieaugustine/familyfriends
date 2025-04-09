import { PiHouse } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";
const Footer = () => {
  return (
    <div className="flex justify-between px-15 items-baseline pb-2">
      <PiHouse size={25} />
      <FaRegStar size={25} />
      <FaRegComment size={25} />
      <RxPerson size={25} />
    </div>
  );
};

export default Footer;
