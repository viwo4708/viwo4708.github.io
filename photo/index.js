function showfash() {
    document.getElementById("fashnav").style.textDecoration = "underline";
    document.getElementById("fashion").style.display = "block";

    document.getElementById("headshots").style.display = "none";
    document.getElementById("headnav").style.textDecoration = "none"

    document.getElementById("gradnav").style.textDecoration = "none";
    document.getElementById("grads").style.display = "none";

    document.getElementById("aboutnav").style.textDecoration = "none";
    document.getElementById("about").style.display = "none";

    globalThis.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

function showhead() {
    document.getElementById("headnav").style.textDecoration = "underline";
    document.getElementById("headshots").style.display = "block";

    document.getElementById("fashion").style.display = "none";
    document.getElementById("fashnav").style.textDecoration = "none";

    document.getElementById("gradnav").style.textDecoration = "none";
    document.getElementById("grads").style.display = "none";

    document.getElementById("aboutnav").style.textDecoration = "none";
    document.getElementById("about").style.display = "none";

    globalThis.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

function showgrad() {
    document.getElementById("gradnav").style.textDecoration = "underline";
    document.getElementById("grads").style.display = "block";

    document.getElementById("fashion").style.display = "none";
    document.getElementById("fashnav").style.textDecoration = "none";

    document.getElementById("headshots").style.display = "none";
    document.getElementById("headnav").style.textDecoration = "none";

    document.getElementById("aboutnav").style.textDecoration = "none";
    document.getElementById("about").style.display = "none";

    globalThis.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

function showabout(){
    document.getElementById("aboutnav").style.textDecoration = "underline";
    document.getElementById("about").style.display = "block";

    document.getElementById("fashion").style.display = "none";
    document.getElementById("fashnav").style.textDecoration = "none";

    document.getElementById("headshots").style.display = "none";
    document.getElementById("headnav").style.textDecoration = "none";

    document.getElementById("gradnav").style.textDecoration = "none";
    document.getElementById("grads").style.display = "none";

    globalThis.scrollTo({ top: 0, left: 0, behavior: "instant" });
}