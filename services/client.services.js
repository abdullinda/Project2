import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function createCliente(cliente) {
  await client.connect();
  const result = await db.collection("Projects").insertOne(cliente);
  return result.ops[0];
}

async function editCliente(id, cliente) {
  await client.connect();
  const result = await db.collection("Projects").updateOne({ _id: new ObjectId(id) }, { $set: cliente });
  return result.modifiedCount > 0;
}

async function replaceCliente(id, cliente) {
  await client.connect();
  const result = await db.collection("Projects").replaceOne({ _id: new ObjectId(id) }, cliente);
  return result.modifiedCount > 0;
}
async function deleteCliente(id) {
  await client.connect();
  const result = await db.collection("Projects").deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}

async function getClientes(filter = {}) {
  await client.connect();
  const filterMongo = { deleted: { $ne: true } };
  if (filter?.cliente) {
    filterMongo.cliente = { $all: filter.cliente.split(';') };
  }
  return db.collection("Projects").find(filterMongo).toArray();
}

async function getClienteById(id) {
  await client.connect();
  return db.collection("Projects").findOne({ _id: new ObjectId(id) });
}

async function getClientesBySection(section) {
  await client.connect();
  const filter = { section: section.toLowerCase() };
  return db.collection("Projects").find(filter).toArray();
}


export {
  getClientes,
  getClienteById,
  createCliente,
  editCliente,
  deleteCliente,
  replaceCliente,
  getClientesBySection
};
