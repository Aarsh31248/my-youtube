export const chatUsers = [
  "Rahul",
  "Neha",
  "Aman",
  "Pooja",
  "Vikram",
  "Sneha",
  "Rohit",
  "Anjali",
  "Kunal",
  "Riya",
  "Sarthak",
  "Harsh",
  "Simran",
  "Arjun",
  "Ishita",
  "Dev",
  "Aakash",
  "Priya",
  "Nikhil",
  "Mehul",
];

export const chatMessages = [
  "🔥 This stream is fire!",
  "Can you explain this part again?",
  "Hello from Delhi 👋",
  "Who’s watching in 2025?",
  "This finally makes sense!",
  "Audio is very clear 👍",
  "Please make part 2",
  "Subscribed just now ❤️",
  "This helped me a lot",
  "Best explanation so far",
  "Can you share the repo link?",
  "Love this live session",
  "Is this recorded or live?",
  "Anyone here learning React?",
  "This topic was confusing earlier",
  "Can you slow down a bit?",
  "Thanks for doing this stream",
  "Greetings from Bangalore 🙌",
  "This deserves more views",
  "Watching during office break 😅",
];

export const getRandomChat = () => {
  return {
    name: chatUsers[Math.floor(Math.random() * chatUsers.length)],
    message: chatMessages[Math.floor(Math.random() * chatMessages.length)],
  };
};
