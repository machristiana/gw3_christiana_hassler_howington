document.getElementById("overlay").addEventListener("mouseover", mouseOver);
document.getElementById("overlay").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("ladies-gents-link").style.visibility = "visible";
}

function mouseOut() {
  document.getElementById("ladies-gents-link").style.visibility = "hidden";
}
