import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("", { dbName: "MERN_STACK_EVENT_MESSAGE" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};