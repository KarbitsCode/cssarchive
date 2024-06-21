window.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll("a").forEach(function(element) {
    element.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.replace(this.getAttribute("href"));
    });
  });
});
