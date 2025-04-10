import PrimaryButton from "@/components/(globals)/PrimaryButton";
import ClientList from "@/components/(listcard)/ClientList";
import RemoteImage from "@/components/RemoteImage";
import FilterButton from "@/components/(globals)/FilterButton";

export default async function Home() {
  return (
    <section className="flex flex-col gap-3">
      <FilterButton></FilterButton>
      <ClientList></ClientList>
    </section>
  );
}
