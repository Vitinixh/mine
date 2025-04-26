// tips

// Add your JavaScript code here

// You can interact with HTML elements using the DOM API
// Example: Get an element by its ID
// const myElement = document.getElementById('my-element');

// You can change element styles
// Example: Change background color
// if (myElement) {
//   myElement.style.backgroundColor = 'green';
// }

// You can add event listeners
// Example: Run a function when a button is clicked
// function myFunction() {
//   alert('Button clicked!');
// }

// If you need to use libraries from a CDN, you can use an import map
// Add this to your HTML <head>:
/*
<script type="importmap">
  {
    "imports": {
      "libraryName": "https://cdn.jsdelivr.net/npm/libraryName@version/dist/library.esm.js"
    }
  }
</script>
*/
// Then you can import them in your JS:
// import libraryName from 'libraryName';

// Write your interactive logic below!

console.log("VITINIXH site loaded - Spiderman theme enhanced");

// Optional: Add hover effect to eyes using JS for more complex interaction
const eyes = document.querySelectorAll('#spiderman-mask .eye');
const mask = document.getElementById('spiderman-mask');

mask.addEventListener('mouseenter', () => {
  eyes.forEach(eye => eye.style.fill = '#eee'); // Slightly change color on hover
});

mask.addEventListener('mouseleave', () => {
  eyes.forEach(eye => eye.style.fill = 'white'); // Revert color
});