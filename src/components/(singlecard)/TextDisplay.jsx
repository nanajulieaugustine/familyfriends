import DescTag from "./DescTag";

const TextDisplay = ({ name, description }) => {
  return (
    <div className="flex flex-col gap-3 relative -top-5">
      <h1>{name}</h1>
      <DescTag></DescTag>
      <p>{description}</p>
    </div>
  );
};

export default TextDisplay;
