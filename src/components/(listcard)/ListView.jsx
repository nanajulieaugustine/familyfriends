import FilterButton from "../(globals)/FilterButton";
import ListCard from "./ListCard";

const ListView = () => {
  return (
    <div>
      <FilterButton></FilterButton>
      <ListCard className="grid grid-cols-2"></ListCard>
    </div>
  );
};

export default ListView;
