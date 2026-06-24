const Playlist = [
  {
    id: 1,
    name: "Midnight Melancholy",
    artist: "Luna Eclipse",
    coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Neon Horizons",
    artist: "CyberPulse",
    coverUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Golden Hour Vibes",
    artist: "Summer Solstice",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "Echoes of the Past",
    artist: "The Vintage Theory",
    coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    name: "Electric Dreams",
    artist: "SynthWave Symphony",
    coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    name: "Rainy Day Coffee",
    artist: "Lo-Fi Chill Beats",
    coverUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    name: "Desert Mirage",
    artist: "Sandstorm Nomad",
    coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    name: "Ocean Breeze",
    artist: "Marina & The Tide",
    coverUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    name: "Urban Jungle",
    artist: "Concrete Beats",
    coverUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 10,
    name: "Stardust Crusader",
    artist: "Galactic Orchestra",
    coverUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 11,
    name: "Velvet Nights",
    artist: "Jazz Quartet Jazz",
    coverUrl: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 12,
    name: "Mountain Peak",
    artist: "Alpine Echo",
    coverUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 13,
    name: "Rebel Heart",
    artist: "The Distortion Project",
    coverUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 14,
    name: "Serenity Now",
    artist: "Zen Harmony",
    coverUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 15,
    name: "Tomorrow's Tale",
    artist: "The Futurist",
    coverUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60"
  }
];
const playlistContainer = document.getElementById('card-container');

// 3. Loop through the array
Playlist.forEach(song => {
  
  // 4. Create a template literal for the HTML structure
  const cardHTML = `
            <div class="card" id="card${song.id}">
        <img src="${song.coverUrl}" class="card-img-top" alt="...">
        <h5 class="card-title text-white pt-2">${song.name}</h5>
        <p class="card-text" style="color: darkgrey; font-size: smaller ;">${song.artist}</p>
<button class="play-button" id="${song.id}">
    <svg viewBox="0 0 24 24" width="20px" height="20px">
        <path d="M8 5v14l11-7z"/>
    </svg>
</button>
      </div>
  `;

  // 5. Append this HTML string inside the container on every turn of the loop
  playlistContainer.innerHTML += cardHTML;
});

const navbutton=`<button id="circle-nav-btn" class="circle-nav-btn">
<img src="https://www.svgrepo.com/show/314068/greater-than-solid.svg" class="arrow-svg" height="20px" style="filter: invert(1);" width="20px">
</button>`;

playlistContainer.innerHTML += navbutton;

const currentTrackImage = document.querySelector('.songimage img');
const currentTrackName = document.querySelector('.songname');
const currentTrackArtist = document.querySelector('.songartist');
const playbtn=document.getElementsByClassName("play-button")
// const songimage=document.getElementsByClassName('songimage')
const masterAudio = new Audio();
const masterPlay = document.getElementById('masterPlay');
const playIcon = document.getElementById('playIcon');
const progressRange = document.getElementById('progressRange');
const currentTimeDisplay = document.getElementById('currentTime');
const durationTimeDisplay = document.getElementById('durationTime');
const volumeRange = document.getElementById('volumeRange');

function formatTime(secs) {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.floor(secs % 60);
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
}


masterPlay.addEventListener('click', () => {
    if (masterAudio.paused || masterAudio.currentTime <= 0) {
        masterAudio.play();
        playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`; // Change SVG path to Pause lines
    } else {
        masterAudio.pause();
        playIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`; // Change SVG path back to Play triangle
    }
});


for(let i=0;i<playbtn.length;i++){
    playbtn[i].addEventListener('click',()=>{
        currentTrackImage.src=Playlist[i].coverUrl;
        currentTrackName.textContent=Playlist[i].name;
currentTrackArtist.textContent=Playlist[i].artist;
masterAudio.src = `C:/Users/priya/Desktop/code/WEBDEV/projects/spotifyclone/songs/${i}.mp3`; 
        masterAudio.play();
        playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
    })
}

masterAudio.addEventListener('timeupdate', () => {
    if (masterAudio.duration) {
        // Update slider value position percentage
        const progressPercentage = (masterAudio.currentTime / masterAudio.duration) * 100;
        progressRange.value = progressPercentage;
        
        // Update running timestamps
        currentTimeDisplay.textContent = formatTime(masterAudio.currentTime);
        durationTimeDisplay.textContent = formatTime(masterAudio.duration);
    }
});

progressRange.addEventListener('input', () => {
    const targetTime = (progressRange.value * masterAudio.duration) / 100;
    masterAudio.currentTime = targetTime;
});


volumeRange.addEventListener('input', () => {
    masterAudio.volume = volumeRange.value / 100;
});
