// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var currentVol = 3;

function init() {
  volLevels = []
  for (var x = 0; x < 6; x++) {
    volLevels.push(document.getElementById("vl" + x));
  }
  for (var x = 0; x < currentVol; x++) {
    volLevels[x].style.backgroundColor = "purple";
  }
  // document.write(volLevels);
};

function volUp() {
	if (currentVol <6){
    currentVol = currentVol + 1;
  }
  for (var x = 0; x < currentVol; x++) {
    volLevels[x].style.backgroundColor = "purple";
  }
}

function volDown() {
	if (currentVol >0){
    currentVol--;
  }
  for (var x = currentVol; x < 6; x++) {
    volLevels[x].style.backgroundColor = "white";
  }
}

function switchPlay() {
	var thisButton = document.getElementById("playPause"); //Get PlayPause button
  // document.write(thisButton.innerHTML);
  if (thisButton.innerHTML == "play_arrow"){
    var thisTimeBox = document.getElementById("time-elapsed");
    thisButton.innerHTML = "pause";
    playTime = setInterval(function(){ //let curse move every 1000ms
      var thisTime = document.getElementById("player-time");
      var currentTime = Number(thisTime.value);
      if(currentTime >= 180){
        nextSong();
      }
      else {
        currentTime++;
        thisTime.value = currentTime;
        var currentMS = secondsToMs(currentTime);
        thisTimeBox.innerHTML = currentMS;
      }
    }, 1000);
  }
  else if (thisButton.innerHTML == "pause") {
    thisButton.innerHTML = "play_arrow";
    clearInterval(playTime); //Stop curse move every 1000ms
  }
}

function nextSong() {
  var currentSongName = document.getElementById("player-song-name");
  var thisTimeBox = document.getElementById("time-elapsed");
  var thisTime = document.getElementById("player-time");
  thisTimeBox.innerHTML = secondsToMs(0);
  thisTime.value = 0;
  // document.write(currentSongName.innerHTML);
  var songIndex = tracklist.findIndex(index => index === currentSongName.innerHTML) //Find which song this is
  // document.write(songIndex);
  songIndex++;
  if(songIndex == tracklist.length){
    songIndex = 0;
  }
  currentSongName.innerHTML = tracklist[songIndex];
}

function prevSong() {
  var currentSongName = document.getElementById("player-song-name");
  var thisTimeBox = document.getElementById("time-elapsed");
  var thisTime = document.getElementById("player-time");
  thisTimeBox.innerHTML = secondsToMs(0);
  thisTime.value = 0;
  var songIndex = tracklist.findIndex(index => index === currentSongName.innerHTML) //Find which song this is
  songIndex--;
  if(songIndex == 0){
    songIndex = tracklist.length -1;
  }
  currentSongName.innerHTML = tracklist[songIndex];
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
