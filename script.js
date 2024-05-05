const projectContainer = document.querySelector('.projects-container')

const getProjects = async () => {
    const res = await fetch('projects.json')
    const data = await res.json()
    return data;
}

getProjects().then(data => {
    data.projects.forEach(project => {
        projectContainer.innerHTML += `
        <div class="project-card">
        <h2>${project.name}</h2>

            <div>
                <img src="${project.img}"/>
                <div><i class="fa-solid fa-arrow-up-right-from-square"></i></i></div>
                <div class="project-links">
                    <a href=${project.ghLink} id="github-link" target="_blank">Go to GitHub</a>
                    <a href=${project.liveLink} id="live-link" target="_blank">Open live</a>
                </div>
            </div>
           
            <p>${project.skills}</p>
            
        </div>
    `
    })
})