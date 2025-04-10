const ServerList = async () => {
  const data = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  const animals = await data.json();

  console.log("test; ", animals);

  return <div></div>;
};
export default ServerList;
