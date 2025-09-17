// Example: Update message dynamically
document.addEventListener("DOMContentLoaded", () => {
  const scrollingText = document.getElementById("scrolling-text");

  // Array of messages to rotate
  const messages = [
    "Welcome to our website! 🎉 Stay tuned for upcoming offers & news.",
    "We now offer free delivery on orders above $50!",
    "Subscribe to our newsletter for exclusive discounts!",
  ];

  let index = 0;

  // Change the message every 10 seconds
  setInterval(() => {
    index = (index + 1) % messages.length;
    scrollingText.textContent = messages[index];
  }, 10000);
});
