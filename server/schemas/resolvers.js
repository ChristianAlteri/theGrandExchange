const Category = require("../models/Category");
const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server");

const userResolvers = {
  User: {
    orders: async (user) => {
      try {
        const orders = await Order.find({ user: user._id });
        return orders;
      } catch (error) {
        throw new Error("Error fetching orders");
      }
    },
    isCorrectPassword: async (user, { password }) => {
      try {
        return await bcryptjs.compare(password, user.password);
      } catch (error) {
        throw new Error("Error comparing passwords");
      }
    },
  },
  Query: {
    getUser: async (_, { userId }) => {
      try {
        const user = await User.findById(userId);
        return user;
      } catch (error) {
        throw new Error("Error fetching user");
      }
    },
    getAllUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error("Error fetching users");
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      console.log("HEREEEEEEEEE", input);
      try {
        const user = await User.create(input);
        return user;
      } catch (error) {
        console.log(error);
        throw new Error("Error creating user");
      }
    },
    updateUser: async (_, { userId, input }) => {
      try {
        const user = await User.findByIdAndUpdate(userId, input, { new: true });
        return user;
      } catch (error) {
        throw new Error("Error updating user");
      }
    },
    deleteUser: async (_, { userId }) => {
      try {
        const user = await User.findByIdAndRemove(userId);
        return user;
      } catch (error) {
        throw new Error("Error deleting user");
      }
    },
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("No user found with this email");
        }

        const validPassword = await user.isCorrectPassword(password);
        if (!validPassword) {
          throw new AuthenticationError("Incorrect password");
        }

        const token = jwt.sign({ userId: user._id }, "your-secret-key", {
          expiresIn: "1d",
        });

        return { user, token };
      } catch (error) {
        throw new Error("Error during login");
      }
    },
  },
};

const categoryResolvers = {
  Query: {
    getCategory: async (_, { categoryId }) => {
      try {
        const category = await Category.findById(categoryId);
        return category;
      } catch (error) {
        throw new Error("Error fetching category");
      }
    },
    getAllCategories: async () => {
      try {
        const categories = await Category.find();
        return categories;
      } catch (error) {
        throw new Error("Error fetching categories");
      }
    },
  },
  Mutation: {
    createCategory: async (_, { input }) => {
      try {
        const category = await Category.create(input);
        return category;
      } catch (error) {
        throw new Error("Error creating category");
      }
    },
    updateCategory: async (_, { categoryId, input }) => {
      try {
        const category = await Category.findByIdAndUpdate(categoryId, input, {
          new: true,
        });
        return category;
      } catch (error) {
        throw new Error("Error updating category");
      }
    },
    deleteCategory: async (_, { categoryId }) => {
      try {
        const category = await Category.findByIdAndRemove(categoryId);
        return category;
      } catch (error) {
        throw new Error("Error deleting category");
      }
    },
  },
};

const orderResolvers = {
  Order: {
    user: async (order) => {
      try {
        const user = await User.findById(order.user);
        return user;
      } catch (error) {
        throw new Error("Error fetching user");
      }
    },
    products: async (order) => {
      try {
        const products = await Product.find({ _id: { $in: order.products } });
        return products;
      } catch (error) {
        throw new Error("Error fetching products");
      }
    },
  },
  Query: {
    getOrder: async (_, { orderId }) => {
      try {
        const order = await Order.findById(orderId);
        return order;
      } catch (error) {
        throw new Error("Error fetching order");
      }
    },
    getAllOrders: async () => {
      try {
        const orders = await Order.find();
        return orders;
      } catch (error) {
        throw new Error("Error fetching orders");
      }
    },
  },
  Mutation: {
    createOrder: async (_, { input }) => {
      console.log("HEREEEEEEEEE", input);

      try {
        const order = await Order.create(input); // Use input directly to create order
        return order;
      } catch (error) {
        console.error("Error creating order:", error); // Log the actual error
        throw new Error("Error creating order");
      }
    },
    updateOrder: async (_, { orderId, input }) => {
      try {
        const order = await Order.findByIdAndUpdate(orderId, input, {
          new: true,
        });
        return order;
      } catch (error) {
        throw new Error("Error updating order");
      }
    },
    deleteOrder: async (_, { orderId }) => {
      try {
        const order = await Order.findByIdAndRemove(orderId);
        return order;
      } catch (error) {
        throw new Error("Error deleting order");
      }
    },
  },
};

const productResolvers = {
  Query: {
    getUser: async (product) => {
      try {
        const user = await User.findById(product.user_id);
        return user;
      } catch (error) {
        throw new Error("Error fetching user");
      }
    },
    getCategory: async (product) => {
      try {
        const category = await Category.findById(product.category);
        return category;
      } catch (error) {
        throw new Error("Error fetching category");
      }
    },
    getAllProductsByCategoryId: async (_, { categoryId }) => {
      try {
        console.log("categoryID", categoryId);
        const products = await Product.find({
          category: categoryId,
        });
        return products;
      } catch (error) {
        console.log(error);
        throw new Error("Error fetching products by category");
      }
    },
    getAllProducts: async () => {
      try {
        const products = await Product.find().populate("category");
        // console.log(products);
        return products;
      } catch (error) {
        throw new Error("Error fetching products");
      }
    },
  },
  Mutation: {
    createProduct: async (_, { input }) => {
      console.log("made it in create product");
      try {
        const product = await Product.create(input);
        return product;
      } catch (error) {
        console.log(error);
        throw new Error("Error creating product");
      }
    },
    addImage: async (_, { input }) => {
      console.log("made it into addImage");


  
      try {
        const product = await Product.create(this.includesnput);
        return product;
      } catch (error) {
        console.log(error);
        throw new Error('Error updating user profile');
      }
    },
    updateProduct: async (_, { productId, input }) => {
      try {
        const product = await Product.findByIdAndUpdate(productId, input, {
          new: true,
        });
        return product;
      } catch (error) {
        throw new Error("Error updating product");
      }
    },
    deleteProduct: async (_, { productId }) => {
      try {
        const product = await Product.findByIdAndRemove(productId);
        return product;
      } catch (error) {
        throw new Error("Error deleting product");
      }
    },
  },
};

const resolvers = [
  userResolvers,
  categoryResolvers,
  orderResolvers,
  productResolvers,
];

module.exports = resolvers;
