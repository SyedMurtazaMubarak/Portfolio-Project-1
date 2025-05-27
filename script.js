window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

function playVideo() {
  document.querySelector(".video-wrapper").style.display = "none"; // Hide thumbnail
  document.getElementById("videoContainer").style.display = "block"; // Show video
}

function toggleMenu() {
  document.querySelector(".nav-list").classList.toggle("active");
}
