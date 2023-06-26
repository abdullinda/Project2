import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db("AH20231CP1");
const productReviews = db.collection("product_reviews");

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

async function getReviews(idProduct) {
  try {
    if (!client.isConnected()) {
      await connect();
    }

    const reviews = await productReviews.findOne({
      product_id: new ObjectId(idProduct)
    });

    return reviews;
  } catch (error) {
    console.error("Error retrieving reviews:", error);
    return null;
  }
}

async function createReview(idProduct, review) {
  try {
    if (!client.isConnected()) {
      await connect();
    }

    const update = await productReviews.updateOne(
      { product_id: new ObjectId(idProduct) },
      { $push: { reviews: review } }
    );

    if (update.upsertedCount === 0) {
      await productReviews.insertOne({
        product_id: new ObjectId(idProduct),
        reviews: [review]
      });
    }

    console.log(update);

    return review;
  } catch (error) {
    console.error("Error creating review:", error);
    return null;
  }
}

export { 
  getReviews, 
  createReview 
};
