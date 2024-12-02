'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

// Data video simulasi
const videos = [
  { title: "Twice Avengers", url: "" },
  { title: "", url: "https://example.com/spiderman" },
  { title: "", url: "https://example.com/naruto" },
  { title: "", url: "https://example.com/aot" },
];

// Event untuk logo pencarian
document.getElementById("search-logo").addEventListener("click", function() {
  const searchInput = document.getElementById("search-input");
  // Toggle tampilan kolom pencarian
  if (searchInput.style.display === "none") {
      searchInput.style.display = "block";
      searchInput.focus();
  } else {
      searchInput.style.display = "none";
      document.getElementById("search-results").innerHTML = ""; // Bersihkan hasil
  }
});

// Event untuk kolom pencarian (real-time filtering)
document.getElementById("search-input").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(query));

  // Tampilkan hasil pencarian
  const resultsDiv = document.getElementById("search-results");
  resultsDiv.innerHTML = filteredVideos.length
      ? filteredVideos.map(video => `<div><a href="${video.url}" target="_blank">${video.title}</a></div>`).join('')
      : "<p>Tidak ada hasil ditemukan</p>";
});
