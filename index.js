/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
// Step 1: DOM Manipulation
// Uncomment the code to locate the heart element
const articleHearts = document.querySelectorAll('.like-button');

// Step 2: Server-Side Behavior (Stubbed In)
// Uncomment the code to simulate server communication
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 1000);
  });
}

// Step 3: Event Listening
// Uncomment the code to listen for the "click" event on the heart element
articleHearts.forEach(heart => {
  heart.addEventListener('click', async () => {
    try {
      // Simulate server call
      await mimicServerCall();

      // Toggle the "liked" state by adding/removing a class
      if (heart.classList.contains('activated-heart')) {
        heart.classList.remove('activated-heart');
      } else {
        heart.classList.add('activated-heart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
});