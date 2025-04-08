import FaveIcon from "../(globals)/FaveIcon";
import RemoteImage from "../RemoteImage";

const ListCard = () => {
  return (
    <div className="rounded-2xl bg-[#ffffff] shadow-sm">
      <FaveIcon></FaveIcon>
      <RemoteImage></RemoteImage>
      <div className="p-3">
        <h3>navn</h3>
        <div className="flex justify-between">
          <p className="text-[#ADADAD]">type</p>
          <p className="text-[#ADADAD]">alder</p>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
