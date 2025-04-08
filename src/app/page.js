import PrimaryButton from "@/components/(globals)/PrimaryButton";
import ListView from "@/components/(listcard)/ListView";
import RemoteImage from "@/components/RemoteImage";

export default async function Home() {
  const data = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  const animals = await data.json();
  return (
    <section>
      <ListView></ListView>
    </section>
  );
}
