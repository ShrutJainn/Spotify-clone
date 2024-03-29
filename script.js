console.log("welcome to spotify");

//initialize variables
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("progressBar");
let masterSong = document.getElementById("masterSongName");
let circle = document.getElementById("circleFollower");
var navItem = document.querySelectorAll(".navItem");
var container = document.querySelector(".container");
var songItems = document.querySelectorAll(".songItem");
var heading = document.querySelector("h1");

function circleMouseFollower(xScale, yScale) {
  window.addEventListener("mousemove", (dets) => {
    circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}
circleMouseFollower();

gsap.to(navItem, {
  top: 0,
  stagger: 0.1,
});

gsap.to(container, {
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 1,
});

Shery.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

songItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    circle.style.backgroundColor = "black";
  });
  item.addEventListener("mouseleave", () => {
    circle.style.backgroundColor = "white";
  });
});
heading.addEventListener("mouseenter", () => {
  circle.style.backgroundColor = "black";
});
heading.addEventListener("mouseleave", () => {
  circle.style.backgroundColor = "white";
});

let songs = [
  {
    songName: "Vyanjan",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.png",
  },
  {
    songName: "Quarantine - Young Stunners, KR$NA",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.png",
  },
  {
    songName: "Makasam - KR$NA",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.png",
  },
  {
    songName: "Saza-e-Maut - Raftaar,KR$NA",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.png",
  },
  {
    songName: "3:59 - Divine",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.png",
  },
  {
    songName: "Balli Aur Main - Talha Anjum",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.png",
  },
  {
    songName: "Agency - Talha Anjum, Rap Demon",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.png",
  },
  {
    songName: "One & Only - J-Trix, Subspace",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.png",
  },
  {
    songName: "Namastute - Seedhe Maut",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.png",
  },
  {
    songName: "Freeverse Feast - KR$NA",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.png",
  },
];

//Handle pause/play click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

audioElement.addEventListener("timeupdate", () => {
  var progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

function makeAllPlays() {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = "./songs/" + songIndex + ".mp3";
      masterSong.innerText = songs[songIndex - 1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", function () {
  if (songIndex > 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = "./songs/" + songIndex + ".mp3";
  masterSong.innerText = songs[songIndex - 1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", function () {
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  audioElement.src = "./songs/" + (songIndex + 1) + ".mp3";
  masterSong.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
