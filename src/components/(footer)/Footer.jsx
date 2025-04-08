import { PiHouse } from "react-icons/pi";
import { PiStar } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";
const Footer = () => {
  return (
    <div className="flex justify-between px-15 items-baseline">
      <PiHouse />
      <PiStar />
      <FaRegComment />
      <RxPerson />
    </div>
  );
};

export default Footer;
