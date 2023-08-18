getRepo("https://api.github.com/users/ATOMIC09/repos")

// Function to get repository information from GitHun API
async function getRepo(URL) {
    const res = await fetch(URL)
    const data = await res.json()
    onload(data)
}

function onload(data) {
    let template = document.getElementById("project-preview").content.querySelector("div")
    for (let i = 0; i < data.length && i <= 2; i++) {
        repo_data = data[i]
        let item = document.importNode(template, true)
        item.id = "project-" + (i+1)
        console.log(repo_data)
        item.getElementsByTagName("B")[0].innerHTML = repo_data["name"]
        item.getElementsByTagName("A")[0].href = repo_data["html_url"]
        item.getElementsByClassName("preview-image")[0].src = repo_data["html_url"] + "/blob/main/Preview-Image.png?raw=true"
        item.getElementsByClassName("description")[0].innerHTML = repo_data["description"]
        document.getElementsByClassName("project-preview")[0].appendChild(item)
    }
}