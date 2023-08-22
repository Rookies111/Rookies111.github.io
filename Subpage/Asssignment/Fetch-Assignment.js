// Function to run when first load the script
async function LoadMD() {
    // Get markdown file from GitHub Repository
    const markdown_url = "https://raw.githubusercontent.com/12inNe/12in/site/event/TurboC_review.md"
    const response2 = await fetch(markdown_url)
    const data2 = await response2.text()
    displayMarkdown(data2)
}

// Function for display the markdown file in User repositories
function displayMarkdown(markdown) {
    const converter = new showdown.Converter()
    let html = converter.makeHtml(markdown)
    document.getElementById("markdown-display").innerHTML = html
}

// Function to run when first load the script
async function LoadC() {
    const converter = new showdown.Converter()
    const parent = document.getElementsByClassName("section")[0]
    const template = document.getElementById("code-display-temp").content.querySelector("div")
    for (i=1; i <= 8; i++) {
        // Get markdown file from GitHub Repository
        const markdown_url = `https://raw.githubusercontent.com/SkyJTx/SkyJTx.github.io/main/asset/problem_code/p${i}.c`
        const response = await fetch(markdown_url)
        const data = await response.text()
        let item = document.importNode(template, true)
        let html = converter.makeHtml(`# Problem ${i}\n____\n\`\`\`c\n${data}\n\`\`\``)
        item.id = `problem-${i}`
        item.innerHTML = html
        item.style.display = "none"
        parent.appendChild(item)
    }
    document.getElementById("problem-1").style.display = "block"
    document.getElementById("page-index").value = 1
}

// Function to change to previous page
function prev() {
    let current = document.getElementById("page-index").value - 1
    let displays = document.getElementsByClassName("code-display")
    if (current-1 < 0) {current = displays.length}
    for (i = 0; i < displays.length; i++) {
        displays[i].style.display = "none"
    }
    displays[current-1].style.display = "block"
    document.getElementById("page-index").value = current
}

// Function to change to next page
function next() {
    let current = document.getElementById("page-index").value - 1
    let displays = document.getElementsByClassName("code-display")
    if (current+1 >= displays.length) {current = -1}
    for (i = 0; i < displays.length; i++) {
        displays[i].style.display = "none"
    }
    displays[current+1].style.display = "block"
    document.getElementById("page-index").value = current+2
}

// Function to change to select page
function gotoPage() {
    let target = document.getElementById("page-index").value
    let displays = document.getElementsByClassName("code-display")
    if (displays.length < target || target <= 0) {return false}
    for (i = 0; i < displays.length; i++) {
        displays[i].style.display = "none"
    }
    displays[target-1].style.display = "block"
}