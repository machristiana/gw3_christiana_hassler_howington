// HOMEPAGE 1 - OVERLAY
//Make link appear over image
document.getElementById("overlay-container-home1").addEventListener("mouseover", mouseOverQuoteHome1);
document.getElementById("overlay-container-home1").addEventListener("mouseout", mouseOutQuoteHome1);

function mouseOverLinkHome1() {
  document.getElementById("ladies-gents-link-home1").style.opacity = "1";
}

function mouseOutLinkHome1() {
  document.getElementById("ladies-gents-link-home1").style.opacity = "0";
}


//Make purple overlay appear over
document.getElementById("overlay-container-home1").addEventListener("mouseover", mouseOverOverlayHome1);
document.getElementById("overlay-container-home1").addEventListener("mouseout", mouseOutOverlayHome1);

function mouseOverOverlayHome1() {
  document.getElementById("overlay-home1").style.opacity = "1";
}

function mouseOutOverlayHome1() {
  document.getElementById("overlay-home1").style.opacity = "0";
}




// HOMEPAGE 2 - OVERLAY
//Make link appear over image
document.getElementById("overlay-container-home2").addEventListener("mouseover", mouseOverLinkHome2);
document.getElementById("overlay-container-home2").addEventListener("mouseout", mouseOutLinkHome2);

function mouseOverLinkHome2() {
  document.getElementById("ladies-gents-link-home2").style.opacity = "1";
}

function mouseOutLinkHome2() {
  document.getElementById("ladies-gents-link-home2").style.opacity = "0";
}


//Make purple overlay appear over image
document.getElementById("overlay-container-home2").addEventListener("mouseover", mouseOverOverlayHome2);
document.getElementById("overlay-container-home2").addEventListener("mouseout", mouseOutOverlayHome2);

function mouseOverOverlayHome2() {
  document.getElementById("overlay-home2").style.opacity = "1";
}

function mouseOutOverlayHome2() {
  document.getElementById("overlay-home2").style.opacity = "0";
};
