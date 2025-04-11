import SingleView from "@/components/(singlecard)/SingleView";

export default async function SingleViewPage({ params }) {
  const { id } = await params;
  const data = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  const animalData = await data.json();
  console.log(animalData);

  return <SingleView {...animalData.animal}></SingleView>;
}
