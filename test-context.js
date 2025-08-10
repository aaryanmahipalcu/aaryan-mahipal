// Test script to verify enhanced AI context
const { searchVectorStore } = require('./lib/vector-store');

// Test different queries
const testQueries = [
  "Tell me about Aaryan's experience at Ovelia Health",
  "What projects has Aaryan worked on?",
  "What are Aaryan's skills?",
  "Tell me about Aaryan's education"
];

console.log("Testing Vector Store Search:\n");

testQueries.forEach((query, index) => {
  console.log(`\n--- Test ${index + 1} ---`);
  console.log(`Query: "${query}"`);
  console.log(`Response: ${searchVectorStore(query)}`);
  console.log(`Response length: ${searchVectorStore(query).length} characters`);
}); 