# RecipeShare - Recipe Sharing Application

A beautiful web application for sharing and discovering recipes from around the world.

## 🚀 How to Deploy and Make it Public

### **Option 1: Deploy to Free Hosting Services**

#### **Frontend Deployment (HTML/CSS/JS):**

1. **GitHub Pages (Free):**
   ```bash
   # Create a GitHub repository
   # Upload your index.html file
   # Enable GitHub Pages in repository settings
   # Your site will be available at: https://yourusername.github.io/repositoryname
   ```

2. **Netlify (Free):**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `index.html` file
   - Get a free URL like: `https://your-site-name.netlify.app`

3. **Vercel (Free):**
   - Go to [vercel.com](https://vercel.com)
   - Upload your files
   - Get instant deployment

#### **Backend Deployment (Node.js/Express):**

1. **Render (Free):**
   - Go to [render.com](https://render.com)
   - Connect your GitHub repository
   - Deploy as a Web Service
   - Get URL like: `https://your-app-name.onrender.com`

2. **Railway (Free):**
   - Go to [railway.app](https://railway.app)
   - Connect your repository
   - Automatic deployment

3. **Heroku (Free tier available):**
   - Go to [heroku.com](https://heroku.com)
   - Connect your repository
   - Deploy with one click

### **Option 2: Update Frontend for Production**

After deploying your backend, update the API URL in `index.html`:

```javascript
// Change this line in index.html
const API_BASE_URL = 'https://your-backend-url.com/api';
```

### **Option 3: Local Network Sharing**

To share with people on your local network:

1. **Find your IP address:**
   ```bash
   ipconfig  # On Windows
   ifconfig  # On Mac/Linux
   ```

2. **Update server.js:**
   ```javascript
   app.listen(PORT, '0.0.0.0', () => {
     console.log(`Server running on http://0.0.0.0:${PORT}`);
   });
   ```

3. **Share the URL:**
   - Your local IP: `http://192.168.1.xxx:5000`
   - Others on your network can access it

## 📁 Project Structure

```
RecipeShare/
├── index.html          # Frontend (HTML/CSS/JS)
├── server.js           # Backend (Node.js/Express)
├── package.json        # Dependencies
└── README.md          # This file
```

## 🛠️ Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   node server.js
   ```

3. **Open in browser:**
   - Frontend: Open `index.html` in your browser
   - Backend API: `http://localhost:5000/api`

## 🌟 Features

- ✅ View recipes with beautiful images
- ✅ Add new recipes
- ✅ Responsive design
- ✅ Real-time updates
- ✅ Modern UI with animations

## 🔧 Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Images:** Unsplash API
- **Styling:** Custom CSS with gradients and animations

## 📝 License

This project is open source and available under the MIT License.
