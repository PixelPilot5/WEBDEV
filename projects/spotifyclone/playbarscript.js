
const playbtn=document.getElementsByClassName("play-button")
const songimage=document.getElementsByClassName('songimage')
console.log(songimage[0]);
for(let i=0;i<playbtn.length;i++){
    playbtn[i].addEventListener('click',()=>{
        songimage[0].src=Playlist[i].coverUrl;
    })
}

// songimage.src=song.coverUrl;