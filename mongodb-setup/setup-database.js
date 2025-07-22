// setup-database.js
const { MongoClient } = require('mongodb');

// Your connection string (replace with your actual string)
const uri = "mongodb+srv://tkedirithanthiri2005:ggTt2jhQWfS33bUg@paintpro-cluster.t6vvfnz.mongodb.net/?retryWrites=true&w=majority&appName=paintpro-cluster";

async function setupDatabase() {
  const client = new MongoClient(uri);
  
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB!");
    
    // Select database
    const db = client.db('paintpro');
    
    // Create collections and add sample data
    
    // 1. Categories
    const categories = await db.collection('categories').insertMany([
      {
        name: "Interior Paint",
        description: "Premium interior paints for walls and ceilings",
        slug: "interior-paint",
        isActive: true,
        createdAt: new Date()
      },
      {
        name: "Exterior Paint", 
        description: "Weather-resistant exterior paints",
        slug: "exterior-paint",
        isActive: true,
        createdAt: new Date()
      },
      {
        name: "Tools",
        description: "Professional painting tools and accessories",
        slug: "tools", 
        isActive: true,
        createdAt: new Date()
      }
    ]);
    
    console.log("Categories created:", categories.insertedCount);
    
    // 2. Colors
    const colors = await db.collection('colors').insertMany([
      {
        name: "Ocean Breeze",
        colorCode: "#3B82F6",
        colorFamily: "Blues",
        description: "A calming blue reminiscent of ocean waves",
        finish: "Matte",
        price: {
          regular: 1250,
          currency: "LKR"
        },
        isActive: true,
        createdAt: new Date()
      },
      {
        name: "Forest Whisper",
        colorCode: "#10B981", 
        colorFamily: "Greens",
        description: "Fresh green inspired by forest canopies",
        finish: "Satin",
        price: {
          regular: 3100,
          currency: "LKR"
        },
        isActive: true,
        createdAt: new Date()
      },
      {
        name: "Sunset Glow",
        colorCode: "#F59E0B",
        colorFamily: "Yellows", 
        description: "Warm yellow capturing golden hour light",
        finish: "Gloss",
        price: {
          regular: 1250,
          currency: "LKR"
        },
        isActive: true,
        createdAt: new Date()
      }
    ]);
    
    console.log("Colors created:", colors.insertedCount);
    
    // 3. Products
    const interiorCategoryId = categories.insertedIds[0];
    const toolsCategoryId = categories.insertedIds[2];
    
    const products = await db.collection('products').insertMany([
      {
        name: "Premium Wall Paint - Ocean Blue",
        description: "High-quality interior paint with excellent coverage and durability",
        categoryId: interiorCategoryId,
        brand: "PaintPro",
        sku: "PP-INT-001",
        price: {
          regular: 2850,
          sale: 2550,
          currency: "LKR"
        },
        inventory: {
          quantity: 100,
          lowStockThreshold: 10,
          inStock: true
        },
        specifications: {
          finish: "Matte",
          coverage: "12 sqm per liter",
          dryingTime: "2-4 hours",
          size: "4L",
          colors: ["Ocean Blue", "Deep Navy", "Sky Blue"]
        },
        images: [
          {
            url: "/images/ocean-blue-paint.jpg",
            alt: "Ocean Blue Paint Can",
            isPrimary: true
          }
        ],
        ratings: {
          average: 4.5,
          count: 23
        },
        isActive: true,
        isFeatured: true,
        createdAt: new Date()
      },
      {
        name: "Professional Brush Set - 5 Pieces",
        description: "Complete set of professional painting brushes for all your painting needs",
        categoryId: toolsCategoryId,
        brand: "ProTools",
        sku: "PT-BRS-001", 
        price: {
          regular: 1250,
          currency: "LKR"
        },
        inventory: {
          quantity: 50,
          lowStockThreshold: 5,
          inStock: true
        },
        specifications: {
          pieces: 5,
          sizes: ["1 inch", "2 inch", "3 inch", "4 inch", "angled"],
          material: "Natural bristles"
        },
        images: [
          {
            url: "/images/brush-set.jpg",
            alt: "Professional Brush Set",
            isPrimary: true
          }
        ],
        ratings: {
          average: 4.2,
          count: 15
        },
        isActive: true,
        isFeatured: false,
        createdAt: new Date()
      }
    ]);
    
    console.log("Products created:", products.insertedCount);
    
    // 4. Create a sample user
    const users = await db.collection('users').insertOne({
      firstName: "John",
      lastName: "Doe", 
      email: "john@example.com",
      password: "hashedpassword123", // In real app, this would be hashed
      phone: "+94771234567",
      role: "customer",
      address: {
        street: "123 Main Street",
        city: "Colombo",
        postalCode: "00100",
        country: "Sri Lanka"
      },
      preferences: {
        favoriteColors: [],
        favoriteProducts: [],
        newsletter: true
      },
      isActive: true,
      createdAt: new Date()
    });
    
    console.log("Sample user created");
    
    console.log("Database setup complete!");
    
  } catch (error) {
    console.error("Error setting up database:", error);
  } finally {
    await client.close();
  }
}

// Run the setup
setupDatabase();