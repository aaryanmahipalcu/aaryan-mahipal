// Test script to verify enhanced AI context
const { searchVectorStore } = require('./lib/vector-store.ts')

// Test queries
const testQueries = [
  "Tell me about your personal story and where you grew up",
  "What are your interests beyond work?",
  "Tell me about your writing and Substack posts",
  "What films do you like to rewatch?",
  "Tell me about your experience in India"
]

console.log("Testing enhanced AI context...\n")

testQueries.forEach((query, index) => {
  console.log(`Test ${index + 1}: "${query}"`)
  console.log("Response:")
  try {
    const response = searchVectorStore(query)
    console.log(response.substring(0, 300) + "...")
  } catch (error) {
    console.log("Error:", error.message)
  }
  console.log("\n" + "=".repeat(80) + "\n")
}) 