function opentab(event, tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    var tabLinks = document.getElementsByClassName("tab-links");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-link", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active-link";
}

// Default open tab
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("skills").style.display = "block";
});
