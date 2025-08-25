const express = require('express');
const cors = require('cors');
const app = express();

// ✅ Use Render's PORT or fallback
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample recipes data
let recipes = [ /* ... your recipes ... */ ];

// Routes
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.get('/api/recipes/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ message: 'Recipe not found' });
  }
});

app.post('/api/recipes', (req, res) => {
  const newRecipe = {
    id: recipes.length + 1,
    ...req.body,
    rating: 0,
    author: "Anonymous",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
  };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ API endpoint: http://localhost:${PORT}/api`);
});
