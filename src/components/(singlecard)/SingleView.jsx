import ImageDisplay from "./ImageDisplay";
import TextDisplay from "./TextDisplay";
import PrimaryButton from "../(globals)/PrimaryButton";
const SingleView = () => {
  return (
    <div className="flex flex-col">
      <ImageDisplay></ImageDisplay>
      <TextDisplay></TextDisplay>
      <div className="flex justify-center py-5">
        <PrimaryButton></PrimaryButton>
      </div>
    </div>
  );
};

export default SingleView;
