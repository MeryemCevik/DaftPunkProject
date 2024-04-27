//play audio
function playAudio(soundId) {
    var audio = document.getElementById(soundId);
    audio.play();
}
  //stop audio
function stopAllAudio() {
  var allAudio = document.querySelectorAll('audio');
  allAudio.forEach(function(audio) {
    audio.pause();
    audio.currentTime = 0;
  });
}
//play /w keyboard

//keyboard
document.addEventListener("keydown", function(event) {
  switch(event.key) {

    case "a":
      playAudio('work_it');
      break;

    case "z":
      playAudio('harder');
      break;

    case "e":
      playAudio('make_it');
      break;

    case "r":
      playAudio('better');
      break;

    case "t":
      playAudio('do_it');
      break;

    case "y":
      playAudio('faster');
      break;

    case "u":
      playAudio('makes_us');
      break;

    case "i":
      playAudio('stronger');
      break;

    case "o":
      playAudio('more_than');
      break;

    case "p":
      playAudio('ever');
      break;

    case "q":
      playAudio('hour');
      break;

    case "s":
      playAudio('after');
      break;

    case "d":
      playAudio('our');
      break;

    case "f":
      playAudio('work_is');
      break;

    case "g":
      playAudio('never');
      break;

    case "h":
      playAudio('over');
      break;

    case "w":
      playAudio('all');
      break;

    case "q":
      stopAllAudio();
      break;
  }
});