import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://amirsilva00an:jP9OwBqoLg2ivaaQ@cluster.95uq5.mongodb.net/?retryWrites=true&w=majority&appName=ClusterjP9OwBqoLg2ivaaQ";

const client = new MongoClient(URI);

export const db = client.db("spotifake");
