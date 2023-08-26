//shows sidebar on top of content
function openSidebar() {
    let openside = document.getElementById("openside");
    let sidebar = document.getElementById("sidebar");

    openside.setAttribute("onclick", "closeSidebar()");
    openside.innerHTML = "◄";

    if (window.innerWidth >= 800) {
        sidebar.style.width = "300px";
        openside.style.left = "300px";
    } else {
        sidebar.style.width = "200px";
        openside.style.left = "200px";
    }
}

//closes sidebar
function closeSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0";

    let openside = document.getElementById("openside");
    openside.setAttribute("onclick", "openSidebar()");
    openside.innerHTML = "►";
    if (window.innerWidth >= 800) {
        openside.style.left = "0";
    } else {
        openside.style.left = "0";
    }
}

function setSidebarStatus() {
    if(window.matchMedia("(pointer: coarse)").matches) {
        document.getElementById("sidebar").classList.remove("sidebar-animated");
    } else {
        document.getElementById("sidebar").classList.add("sidebar-animated");
    }

    if (window.innerWidth >= "800") { //checks width of screen and if reasonable:
        let page = document.getElementById("page"); //sets page content as variable
        page.style.marginLeft = "300px";
        page.onclick = "";

        let sidebar = document.getElementById("sidebar"); //sets sidebar as a variable
        sidebar.style.width = "300px"; //sets sidebar to correct width

        let logo = document.getElementById("sidebar-logo");
        logo.style.maxWidth = "300px";

        document.getElementById("openside").style.display = "none"; //hides the show sidebar button
    } else {
        let page = document.getElementById("page"); // gets page content as variable
        page.setAttribute("onclick","closeSidebar()"); //sets onclick properties of page
        page.style.marginLeft = "0"; //sets page margin to 0

        let sidebar = document.getElementById("sidebar");
        sidebar.style.width = "0";

        let logo = document.getElementById("sidebar-logo");
        logo.style.maxWidth = "200px";

        document.getElementById("openside").style.display = "block"; //hides the show sidebar button
    }

    checkCookies()
}

function checkCookies() {
    if (localStorage.cookiesSeen != "yes") {
        document.getElementById("cookies").style.display = "block";

        document.getElementById("sidebar").style.filter = "blur(10px) grayscale(100%)";
        document.getElementById("openside").style.filter = "blur(10px) grayscale(100%)";
        
        document.getElementById("page").style.filter = "blur(10px) grayscale(100%)";
    }
}

function closeCookies() {
    document.getElementById("cookies").style.display = "none";

    document.getElementById("sidebar").style.filter = "blur(0) grayscale(0)";
    document.getElementById("openside").style.filter = "blur(0) grayscale(0)";

    document.getElementById("page").style.filter = "blur(0) grayscale(0)";

    localStorage.setItem("cookiesSeen", "yes");
}

function rdrctToPrivacy() {
    localStorage.setItem("cookiesSeen", "yes");
    window.location.href = "/pages/privacy_policy.html";
}