import { MongoClient, ObjectId } from 'mongodb';

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "AH20231CP1";

async function initializeDatabase() {
  const client = new MongoClient(connectionURL);

  try {
    await client.connect();
    return client.db(databaseName);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

async function getWebapps(filter = {}) {
  const db = await initializeDatabase();
  const collection = db.collection("Projects");

  const filterMongo = { deleted: { $ne: true } };

  if (filter?.description) {
    filterMongo.$text = { $search: filter.description };
  }

  if (filter?.tags) {
    filterMongo.tags = { $all: filter.tags.split(';') };
  }

  try {
    const webapps = await collection.find(filterMongo).toArray();
    return webapps;
  } catch (error) {
    console.error("Error retrieving web apps:", error);
    throw error;
  }
}

async function getWebappById(id) {
  const db = await initializeDatabase();
  const collection = db.collection("Projects");

  try {
    const webapp = await collection.findOne({ _id: new ObjectId(id) });
    return webapp;
  } catch (error) {
    console.error("Error retrieving web app by ID:", error);
    throw error;
  }
}

async function createWebapp(webapp) {
  const db = await initializeDatabase();
  const collection = db.collection("Projects");

  try {
    const result = await collection.insertOne(webapp);
    return result.insertedId;
  } catch (error) {
    console.error("Error creating web app:", error);
    throw error;
  }
}

async function editWebapp(id, webapp) {
  const db = await initializeDatabase();
  const collection = db.collection("Projects");

  try {
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: webapp });
    return result.modifiedCount;
  } catch (error) {
    console.error("Error editing web app:", error);
    throw error;
  }
}

async function replaceWebapp(id, webapp) {
  const db = await initializeDatabase();
  const collection = db.collection("Projects");

  try {
    const result = await collection.replaceOne({ _id: new ObjectId(id) }, webapp);
    return result.modifiedCount;
  } catch (error) {
    console.error("Error replacing web app:", error);
    throw error;
  }
}

async function deleteWebapp(id) {
  const db = await initializeDatabase();
  const collection = db.collection("Projects");

  try {
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
  } catch (error) {
    console.error("Error deleting web app:", error);
    throw error;
  }
}

export {
  getWebapps,
  getWebappById,
  createWebapp,
  editWebapp,
  deleteWebapp,
  replaceWebapp
};
