(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.addEventListener('DOMContentLoaded', (event) => {
  // Selecciona todos los elementos '.tech-toggle' y añade un evento 'click'
  document.querySelectorAll('.tech-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      // Encuentra el siguiente elemento hermano '.tech-list' y alterna la clase 'active'
      var techList = this.nextElementSibling;
      techList.classList.toggle('active');
    });
  });
});
