import express from "express";
import mongoose from "mongoose";

import { routes } from "./routes";
const server = express();
const PORT = process.env.PORT || 3004;

// conectando com mongoDB(banco de dados MongoDB Atlas com user e senha[user:pass] e nome do banco[oministack])
mongoose.connect(`${process.env.MONGO_URI}`, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
});

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(3004, () => {
	console.log(`Server running at PORT ${PORT}`);
});
