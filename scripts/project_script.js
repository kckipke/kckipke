// Fetch projects from JSON and render them
fetch('projects/projects.json')
  .then((response) => response.json())
  .then((projects) => {
    const container = document.getElementById('projects-container');

    Object.entries(projects).forEach(([proj_id, project]) => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('content');

      const title = document.createElement('h1');
      title.textContent = project.title;
      projectDiv.appendChild(title);

      const skillList = document.createElement('div');
      skillList.classList.add('skill-list');
      project.skills.forEach((skill) => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.textContent = skill;
        skillList.appendChild(skillDiv);
      });
      projectDiv.appendChild(skillList);

      if (project.githubLink != "") {
        const githubLinkDiv = document.createElement('div');
        githubLinkDiv.classList.add('github-link');
        githubLinkDiv.innerHTML = `<img class="github-link" src="photos/github_logo.png"> 
          <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer"> Git Repo </a>`;
        projectDiv.appendChild(githubLinkDiv);
      }

      const description = document.createElement('p');
      fetch(project.description)
        .then((res) => res.text())
        .then((text) => {
          description.innerHTML = `${text} <a href="${project.moreLink}" class="project-link" data-project=${proj_id}>More</a>`;
        })
        .catch((e) => console.error('Error loading descriptions:', e));
      projectDiv.appendChild(description);

      console.log(title)

      document.body.appendChild(projectDiv);
    });
  })
  .catch((error) => console.error('Error loading projects:', error));
