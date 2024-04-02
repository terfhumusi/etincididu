// Function to generate random names
async function GenRandNames(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Main function to create a new repository with a random name
async function createNewRepository() {
  try {
    // Generate a random name for the repository
    const repoName = await GenRandNames(10); // Increased length for uniqueness

    // Create a new repository with the generated name
    const repo = await example.CreateRepository(repoName);

    // Log the successful creation
    console.log('Repository created successfully:', repo.name);
    return repo;
  } catch (error) {
    // Log any errors that occur during the creation process
    console.error('Error creating repository:', error);
  }
}

// Call the main function to execute the repository creation process
createNewRepository();
