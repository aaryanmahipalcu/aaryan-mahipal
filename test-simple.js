// Simple test to check if the vector store works
const fs = require('fs');

// Read the AI context directly
const aiContextPath = './lib/ai-context.ts';
console.log('Checking if ai-context.ts exists:', fs.existsSync(aiContextPath));

// Try to read the file
try {
  const content = fs.readFileSync(aiContextPath, 'utf8');
  console.log('File content length:', content.length);
  console.log('First 200 chars:', content.substring(0, 200));
} catch (error) {
  console.error('Error reading file:', error.message);
}

// Check if vector-store.ts exists
const vectorStorePath = './lib/vector-store.ts';
console.log('Checking if vector-store.ts exists:', fs.existsSync(vectorStorePath));

// Check if the compiled JS files exist
const compiledPath = './.next/server/app/api/chat/route.js';
console.log('Checking if compiled route exists:', fs.existsSync(compiledPath)); 