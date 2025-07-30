const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3000; // ✅ Replit needs this
const POSTS_FILE = path.join(__dirname, 'posts.json');
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// ✅ Serve from current directory where index.html exists
app.use(express.static(__dirname));

