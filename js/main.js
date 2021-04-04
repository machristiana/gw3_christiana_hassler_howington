// HOMEPAGE 1
//Make link appear over image
document.getElementById("overlay-container-home1").addEventListener("mouseover", mouseOverLinkHome1);
document.getElementById("overlay-container-home1").addEventListener("mouseout", mouseOutLinkHome1);

function mouseOverLinkHome1() {
  document.getElementById("ladies-gents-link-home1").style.opacity = "1";
}

function mouseOutLinkHome1() {
  document.getElementById("ladies-gents-link-home1").style.opacity = "0";
}


//Make purple overlay appear over image
document.getElementById("overlay-container-home1").addEventListener("mouseover", mouseOverOverlayHome1);
document.getElementById("overlay-container-home1").addEventListener("mouseout", mouseOutOverlayHome1);

function mouseOverOverlayHome1() {
  document.getElementById("overlay-home1").style.opacity = "1";
}

function mouseOutOverlayHome1() {
  document.getElementById("overlay-home1").style.opacity = "0";
}




// HOMEPAGE 2
//Make link appear over image
document.getElementById("overlay-container-home2").addEventListener("mouseover", mouseOverLink);
document.getElementById("overlay-container-home2").addEventListener("mouseout", mouseOutLink);

function mouseOverLink() {
  document.getElementById("ladies-gents-link-home2").style.opacity = "1";
}

function mouseOutLink() {
  document.getElementById("ladies-gents-link-home2").style.opacity = "0";
}


//Make purple overlay appear over image
document.getElementById("overlay-container-home2").addEventListener("mouseover", mouseOverOverlay);
document.getElementById("overlay-container-home2").addEventListener("mouseout", mouseOutOverlay);

function mouseOverOverlay() {
  document.getElementById("overlay-home2").style.opacity = "1";
}

function mouseOutOverlay() {
  document.getElementById("overlay-home2").style.opacity = "0";
}
