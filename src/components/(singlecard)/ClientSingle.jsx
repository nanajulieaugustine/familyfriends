import SingleView from "./SingleView";

const ClientList = async () => {
  const data = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  }).then((res) => res.json());

  return (
    <ul className="grid grid-cols-2 gap-4">
      {data.animals.map((animal, id) => (
        <SingleView key={id} {...animal}></SingleView>
      ))}
    </ul>
  );
};

export default ClientList;
