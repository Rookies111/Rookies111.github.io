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
    let converter = new showdown.Converter()
    let html = converter.makeHtml(markdown)
    document.getElementById("markdown-display").innerHTML = html
}

// Function to run when first load the script
async function LoadC() {
    // Get markdown file from GitHub Repository
    const markdown_url = "https://raw.githubusercontent.com/12inNe/12in/site/event/TurboC_review.md"
    const response2 = await fetch(markdown_url)
    const data2 = await response2.text()
    displayC(data2)
}

// Function for display the markdown file in User repositories
function displayC(markdown) {
    let converter = new showdown.Converter()
    let html = converter.makeHtml(markdown)
    document.getElementById("markdown-display").innerHTML = html
}