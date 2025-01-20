// Fetch projects from JSON and render them
fetch('projects/projects.json')
  .then((response) => response.json())
  .then((projects) => {
    const container = document.getElementById('projects-container');

    projects.forEach((project) => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('content');

      const title = document.createElement('h1');
      title.textContent = project.title;

      const skillList = document.createElement('div');
      skillList.classList.add('skill-list');
      project.skills.forEach((skill) => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.textContent = skill;
        skillList.appendChild(skillDiv);
      });

      const githubLinkDiv = document.createElement('div');
      githubLinkDiv.classList.add('github-link');
      githubLinkDiv.innerHTML = `<img class="github-link" src="photos/github_logo.png"> 
        <a href="${project.githubLink}"> Git Repo </a>`;

      const description = document.createElement('p');
      description.innerHTML = `${project.description} <a href="${project.moreLink}">More</a>`;

      projectDiv.appendChild(title);
      projectDiv.appendChild(skillList);
      projectDiv.appendChild(githubLinkDiv);
      projectDiv.appendChild(description);

      document.body.appendChild(projectDiv);
    });
  })
  .catch((error) => console.error('Error loading projects:', error));
