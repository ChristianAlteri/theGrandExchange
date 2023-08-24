const db = require('../config/connection');
const { User, Category, Product, Order } = require('../models');


const userData = require('./userData.json');
const categoryData = require('./categoryData.json');
const productData = require('./productData.json');
const orderData = require('./orderData.json');

db.once('open', async () => {
  // clean database
  // await User.deleteMany({});
  // await Category.deleteMany({});
  // await Product.deleteMany({});
  // await Order.deleteMany({});

  // bulk create each model
  // const user = await User.insertMany(userData);
  // const category = await Category.insertMany(categoryData);
  // const product = await Product.insertMany(productData);
  // const order = await Order.insertMany(orderData);

  console.log('all done!');
  process.exit(0);
});
