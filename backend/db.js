const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://cvkumarreddy2004:jXaSNVxoxlNJFkke@cluster0.cn4gmgy.mongodb.net/homebites?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");

    const db = mongoose.connection.db;

    const foodData = await db.collection("fooddata").find({}).toArray();
    const foodCategory = await db.collection("foodcategory").find({}).toArray();
    
    if (!foodData.length || !foodCategory.length) {
      console.warn("⚠️ One of the collections is empty.");
    }
    global.fooddata = foodData;
    global.foodCategory = foodCategory;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = mongoDB;
