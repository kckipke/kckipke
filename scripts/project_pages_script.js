function renderProject(project) {
    const projectContainer = document.getElementById("project-container");
    
    projectContainer.innerHTML = `
        <div class="project-page">
            <h1>${project.title}</h1>
            <div class="skill-list">
                ${project.skills.map(skill => `<div class="skill">${skill}</div>`).join("")}
            </div>
            <div class="github-link">
                <img class="github-link" src="../../photos/github_logo.png">
                <a href="${project.github}" target="_blank">Git Repo</a>
            </div>
            <p>${project.description}</p>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join("")}
            </ul>
        </div>
        <div class="project-image">
            ${project.images.map(img => `<img class="project-image" src="${img}">`).join("")}
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    fetch('projects/project_pages.json')
        .then((response) => response.json())
        .then((projects) => {
            console.log(projects);
            // Handle click event on project links
            document.querySelectorAll(".project-link").forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent page reload
                    const projectKey = this.getAttribute("data-project"); // Get project ID

                    if (projects[projectKey]) {
                        renderProject(projects[projectKey]);
                    }
                });
            });
        });
});
