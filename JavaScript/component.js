async function loadComponent(id, file) {
    const element = document.getElementById(id);
    const response = await fetch(file);
    element.innerHTML = await response.text();
}

loadComponent("header", "/HTML/Components/header.html");
loadComponent("footer", "/HTML/Components/footer.html");