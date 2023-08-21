// Function to run when first load the script
async function onLoad() {
    // Get repository information from GitHub API
    const repo_api_url = "https://api.github.com/users/Rookies111/repos"
    const response1 = await fetch(repo_api_url)
    const data1 = await response1.json()
    displayRepo(data1)
}

// Function to display User repositories information
function displayRepo(data) {
    let template = document.getElementById("project-preview-temp").content.querySelector("div")
    for (let i = 0; i < data.length && i <= 2; i++) {
        repo_data = data[i]
        let item = document.importNode(template, true)
        item.id = "project-" + (i+1)
        // console.log(repo_data)
        item.getElementsByTagName("B")[0].innerHTML = repo_data["name"]
        item.getElementsByTagName("A")[0].href = repo_data["html_url"]
        item.getElementsByClassName("preview-image")[0].src = repo_data["html_url"] + "/blob/main/Preview-Image.png?raw=true"
        item.getElementsByClassName("preview-description")[0].innerHTML = repo_data["description"]
        document.getElementById("project-preview").appendChild(item)
    }
}

function navigate(arg) {
    const parent = document.getElementsByTagName("UL")[0].children
    const parent_length = parent.length
    for (i = 0; i < parent_length; i++) {
        const link = parent[i].children[0]
        link.classList.remove("active")
    }
    // console.log(arg)
    arg.classList.add('active')
}

function screen_position_check() {
    const project_preview = document.getElementById("project-preview").getBoundingClientRect().top
    const assignment = document.getElementById("assignment").getBoundingClientRect().top
    // console.log(window.scrollY);
    if (assignment <= window.scrollY) {
        navigate(document.getElementsByTagName("A")[2])
    } else if (project_preview <= window.scrollY) {
        navigate(document.getElementsByTagName("A")[1])
    } else if (window.scrollY < project_preview) {
        navigate(document.getElementsByTagName("A")[0])
    }
}