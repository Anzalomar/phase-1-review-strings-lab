// Write your code in this file!
// Define the currentUser variable
const currentUser = "John Doe";

// Create the welcomeMessage
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Create the excitedWelcomeMessage
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// Create the shortGreeting
const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;

// Export the variables (if needed for testing)
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};
