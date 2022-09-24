

function toggleNav() {
    const overlay = document.getElementById("overlay")
    const closeBtn = document.getElementById("close-btn")
    const hamburger = document.getElementById("hamburger")
    const header = document.querySelector(".header-illustration")

    if (overlay.style.display == "none") {
        overlay.style.display = "flex"
        closeBtn.style.display = "block"
        hamburger.style.display = "none"
        header.style.visibility = "hidden"
    } else {
        overlay.style.display = "none"
        closeBtn.style.display = "none"
        hamburger.style.display = "block"
        header.style.visibility = "visible"
    }
}

export default toggleNav