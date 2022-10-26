// const keys = document.getElementById("start");

//audio sound

document.addEventListener("keypress", function (e) {
  //const key = e.target;
  //const name = key.textContent;
  //  // if (key.matches("button")) {
  //     console.log(name);
  //   }

  if (e.key === "a") {
    const crash = new Audio("sounds/crash.mp3");
    crash.play();
  }
  if (e.key === "s") {
    const kickbass = new Audio("sounds/kick-bass.mp3");
    kickbass.play();
  }
  if (e.key === "d") {
    const snare = new Audio("sounds/snare.mp3");
    snare.play();
  }
  if (e.key === "f") {
    const tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
  }
  if (e.key === "g") {
    const tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
  }
  if (e.key === "h") {
    const tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
  }
  if (e.key === "j") {
    const tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
  }
});
