document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then((response) => response.text())
    .then((html) => {
      const navbar = document.getElementById("navbar");
      navbar.innerHTML = html;

      // Highlight the current page
      const links = navbar.querySelectorAll("a");
      const currentPage = window.location.pathname.split("/").pop();
      
      links.forEach((link) => {
        const li = link.closest("li"); // Get the parent <li> of the <a> tag
        const href = link.getAttribute("href");

        if (href === currentPage) {
          li.classList.add("active"); // Add the active class to the <li>
        } else {
          li.classList.remove("active"); // Remove active class from other <li> elements
        }
      });
    })
    .catch((error) => console.error("Error loading navigation:", error));
});