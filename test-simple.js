// Simple test to verify chat API functionality
const testAPI = async () => {
  const testQueries = [
    "Tell me about Aaryan's experience at Ovelia Health",
    "What projects has Aaryan worked on?",
    "What is the weather like?",
    "Tell me about Aaryan's education"
  ];

  console.log("Testing Chat API...\n");

  for (let i = 0; i < testQueries.length; i++) {
    const query = testQueries[i];
    console.log(`\n--- Test ${i + 1} ---`);
    console.log(`Query: "${query}"`);
    
    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: query }]
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`Response: ${data.response.substring(0, 200)}...`);
        console.log(`Response length: ${data.response.length} characters`);
        console.log(`Is generic response: ${data.response.includes("I don't have specific information") || data.response.includes("I'm happy to help")}`);
      } else {
        console.log(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
    
    // Wait a bit between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};

testAPI(); 