import PrimaryButton from "@/components/(globals)/PrimaryButton";
import ListView from "@/components/(listcard)/ListView";
import RemoteImage from "@/components/RemoteImage";

export default async function Home() {
  const response = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  console.log(response);

  const data = await response.json();
  const animals = data.animals;

  return (
    <section>
      <ListView>
        {animals.animals.map((animal) => (
          <h2>{animal.name}</h2>
        ))}
      </ListView>
    </section>
  );
}
