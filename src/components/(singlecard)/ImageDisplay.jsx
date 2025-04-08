import BackArrow from "../(globals)/BackArrow";
import FaveIcon from "../(globals)/FaveIcon";
import InnerCard from "./InnerCard";
import RemoteImage from "../RemoteImage";
const ImageDisplay = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <BackArrow></BackArrow>
        <FaveIcon></FaveIcon>
      </div>
      <RemoteImage></RemoteImage>
      <InnerCard></InnerCard>
    </div>
  );
};

export default ImageDisplay;
