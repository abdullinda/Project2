import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient("mongodb://127.0.0.1:27017");
const dbName = "AH20231CP1";

async function getLanding(filter = {}) {
  if (filter.landing) {
    filter.landing = { $regex: filter.tecnologias, $options: 'i' };
  }
  try {
    await client.connect();
    return client.db(dbName).collection("Projects").find(filter).toArray();
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getLandingById(section) {
  try {
    await client.connect();
    const filter = {
      section: section.toLowerCase()
    };
    return client.db(dbName).collection('Projects').find(filter).toArray();
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function createLanding(landing) {
  try {
    await client.connect();
    const result = await client.db(dbName).collection("Projects").insertOne(landing);
    console.log("Landing created:", result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

async function editLanding(id, landing) {
  try {
    await client.connect();
    return client.db(dbName).collection("Projects").updateOne(
      { _id: new ObjectId(id) },
      { $set: landing }
    );
  } catch (err) {
    console.error(err);
  }
}

async function replaceLanding(id, landing) {
  try {
    await client.connect();
    return client.db(dbName).collection("Projects").replaceOne(
      { _id: new ObjectId(id) },
      landing
    );
  } catch (err) {
    console.error(err);
  }
}

async function deleteLanding(id) {
  try {
    await client.connect();
    return client.db(dbName).collection("Projects").deleteOne(
      { _id: new ObjectId(id) }
    );
  } catch (err) {
    console.error(err);
  }
}

async function getLandingsBySection(section) {
  try {
    await client.connect();
    const filter = {
      section: section.toLowerCase()
    };
    return client.db(dbName).collection('Projects').find(filter).toArray();
  } catch (err) {
    console.error(err);
    return [];
  }
}
module.exports={
    getLanding,
    getLandingById,
    createLanding,
    editLanding,
    deleteLanding,
    replaceLanding,
    getLandingsBySection

}
