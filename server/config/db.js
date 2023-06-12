const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    if (db) console.log('DB connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
