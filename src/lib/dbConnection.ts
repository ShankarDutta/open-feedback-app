import mongoose from "mongoose";

type dbConnectionObj = {
	isConnect?: number;
};

const connectdb: dbConnectionObj = {};

const dbConnection = async (): Promise<void> => {
	if (connectdb.isConnect) {
		console.log("Database Connection Already Exist");
		return;
	}

	try {
		const db = await mongoose.connect(process.env.MONGOD_URI || "");

		connectdb.isConnect = db.connections[0].readyState;

		console.log("Database Connection Successful !");
	} catch (error) {
		console.log("Data base connection failed !", error);
		process.exit(1);
	}
};

export default dbConnection;
