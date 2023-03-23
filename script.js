console.log('hello')
let gif=document.getElementById('gif')
let songIndex=0;
let masterName=document.getElementById('masterName')
// let masterPlay=document.getElementById('masterPlay')
let ProgressBar=document.getElementById('ProgressBar')
let audioElement = new Audio('songs/1.mp3');
const masterPlay = document.getElementById('masterPlay');
let songItems=Array.from(document.getElementsByClassName('songItem'))


// let audioElement=new Audio('songs/1.mp3')
//AudioElement.play()

//Handle play /pause click

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element,i)=>{
element.getElementsByTagName('img')[0].src=songs[i].coverPath
element.getElementsByClassName('songName')[0].innerText=songs[i].songName
})

masterPlay.addEventListener('click', ()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//percentage=current time/duration *100


//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    ProgressBar.value=progress;

})

ProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=((ProgressBar.value*audioElement.duration)/100)

})

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{ 
//         makeAllPlays();
      
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
        
        
//     })
// })

const makeAllplays=()=>{

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

    element.classList.remove('fa-pause-circle')
    element.classList.add('fa-play-circle')
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeAllplays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        //playinng new song
        songIndex=parseInt(e.target.id);
        audioElement.currentTime=0
        gif.style.opacity=1;
        masterName.innerText=songs[songIndex-1].songName;
        audioElement.src=`songs/${songIndex}.mp3`
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})



document.getElementById('next').addEventListener('click',()=>{
if(songIndex>9){
    songIndex=1;

}
else{
    songIndex+=1;
}
let ele1=document.getElementById(songIndex)
console.log(ele1.id)
makeAllplays()
ele1.classList.remove('fa-play-circle');
ele1.classList.add('fa-pause-circle');

audioElement.currentTime=0
audioElement.src=`songs/${songIndex}.mp3`
audioElement.play();
gif.style.opacity=1;
makeAllplays()
masterName.innerText=songs[songIndex-1].songName;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=10;
    
    }
    else{
        songIndex-=1;
    }
    let ele=document.getElementById(songIndex)
    makeAllplays()
    ele.classList.remove('fa-play-circle');
    ele.classList.add('fa-pause-circle');
    audioElement.currentTime=0
    masterName.innerText=songs[songIndex-1].songName;
    audioElement.src=`songs/${songIndex}.mp3`
    audioElement.play();
    
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
    