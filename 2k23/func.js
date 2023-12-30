var songs = [
    { name: "finally we are here", src: "finally we are here.mp3" },
    { name: "Memory Reboot", src: "memoryreboot.mp3" },
    { name: "Resonance", src: "reverseresonance.mp3" },
    { name: "aurorian dance", src: "aurorian dance.mp3" },
  ];

  var audio = document.getElementById('song');
  var playBtn = document.getElementById('play-btn');
  var songSelector = document.getElementById('song-selector');

  // Populate the song selector
  songs.forEach(function(song, index) {
    var option = document.createElement('option');
    option.value = index;
    option.text = song.name;
    songSelector.add(option);
  });

  // Set the initial song
  audio.src = songs[0].src;

  // Event listener for song selection
  songSelector.addEventListener('change', function() {
    var selectedSongIndex = songSelector.value;
    audio.src = songs[selectedSongIndex].src;
    audio.load(); // Load the new song
    audio.pause(); // Pause the current song
    playBtn.innerText = 'Play Song';
  });

  // Event listener for play button
  playBtn.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      playBtn.innerText = 'Pause Song';
    } else {
      audio.pause();
      playBtn.innerText = 'Play Song';
    }
  });