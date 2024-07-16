const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

async function main() {
  const Db = process.env.URL;
  const client = new MongoClient(Db);

  try {
    await client.connect();

    const collections = await client.db("aartedolanche").collections();

    console.log(collections);
  } catch (e) {
    console.log(e.message.data);
    console.error("conectado", " from error");
  } finally {
    await client.close();
    console.log("conectadao");
  }

  //   collections.forEach((collection) =>
  //     console.log(collection.s.namespace.collection),
  //   );
}

main();
