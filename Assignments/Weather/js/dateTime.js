const updatedDate = document.querySelector('#updatedDate')
updatedDate.textContent = ` ${document.lastModified}`;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}