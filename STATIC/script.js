hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}

// const video = document.getElementById('myVideo');
// const playButton = document.getElementById('playButton');

// playButton.addEventListener('click', function () {
//   video.play();
//   playButton.style.display = 'none'; // Hide the play button after clicking
// });

document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the "TOP" link
  var topLink = document.querySelector(".top h1 a");

  // Add a click event listener to the link
  topLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    scrollToTop(); // Call the scrollToTop function
  });

  // Function to scroll to the top of the page
  function scrollToTop() {
    var topOfPage = document.getElementById("top-of-page");
    topOfPage.scrollIntoView({ behavior: "smooth" });
  }
});