window.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll("a").forEach(function(element) {
    element.addEventListener("click", function(event) {
      if (this.getAttribute("href") !== null) {
        event.preventDefault();
        window.location.replace(this.getAttribute("href"));
      };
    });
  });
});
