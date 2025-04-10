import SingleView from "@/components/(singlecard)/SingleView";
const SingleViewPage = async ({ params }) => {
  const { id } = await params.id;
  return (
    <section>
      <SingleView></SingleView>
    </section>
  );
};

export default SingleViewPage;
