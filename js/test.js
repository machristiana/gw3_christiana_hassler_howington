// LADIES 1 - OVERLAY
//Make text appear over image
document.getElementById("overlay-container-ladies1").addEventListener("mouseover", mouseOverQuoteLadies1);
document.getElementById("overlay-container-ladies1").addEventListener("mouseout", mouseOutQuoteLadies1);

function mouseOverQuoteLadies1() {
  document.getElementById("quote-ladies1").style.opacity = "1";
}

function mouseOutQuoteLadies1() {
  document.getElementById("quote-ladies1").style.opacity = "0";
}


//Make color overlay appear over image
document.getElementById("overlay-container-ladies1").addEventListener("mouseover", mouseOverOverlayLadies1);
document.getElementById("overlay-container-ladies1").addEventListener("mouseout", mouseOutOverlayLadies1);

function mouseOverOverlayLadies1() {
  document.getElementById("overlay-ladies1").style.opacity = "1";
}

function mouseOutOverlayLadies1() {
  document.getElementById("overlay-ladies1").style.opacity = "0";
}
