document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.getElementById("down_arrow");
    const projects = document.querySelectorAll(".portfolio_projects");
    const dividers = document.querySelectorAll(".project-divider");
    const footer = document.querySelector("footer");

    arrow.addEventListener("click", function () {
        projects.forEach(project => {
            project.classList.toggle("visible");
        });

        dividers.forEach(divider => {
            divider.classList.toggle("visible");
        });

        footer.classList.toggle("visible");
    });
});