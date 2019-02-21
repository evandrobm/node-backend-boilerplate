import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://nodebb:nbballstar@backendboilerplate-rc12h.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true, useCreateIndex: true }
);
mongoose.Promise = global.Promise;

export default mongoose;
