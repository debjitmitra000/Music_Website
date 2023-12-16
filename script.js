const music=new Audio('mp3/0.mp3');

const songarr=[
    {
        id:0,
        songname:`Howling`,
        artistname:`Asena`,
        poster:`jpg/0.jpg`,
    },
    {
        id:1,
        songname:`Royalty`,
        artistname:`Neoni`,
        poster:`jpg/1.jpg`,
    },
    {
        id:2,
        songname:`On & On`,
        artistname:`Daniel Levi`,
        poster:`jpg/2.jpg`,
    },
    {
        id:3,
        songname:`Fearless`,
        artistname:`Linton`,
        poster:`jpg/3.jpg`,
    },
    {
        id:4,
        songname:`Cardles`,
        artistname:`Urban`,
        poster:`jpg/4.jpg`,
    },
    {
        id:5,
        songname:`Heroes Tonight`,
        artistname:`Meastro`,
        poster:`jpg/5.jpg`,
    },
    {
        id:6,
        songname:`Devil`,
        artistname:`Diamond`,
        poster:`jpg/6.jpg`,
    },
    {
        id:7,
        songname:`Why We Lose`,
        artistname:`Colemon`,
        poster:`jpg/7.jpg`,
    },
    {
        id:8,
        songname:`Superhero`,
        artistname:`Linton`,
        poster:`jpg/8.jpg`,
    },
    {
        id:9,
        songname:`Mortals`,
        artistname:`Warriyo`,
        poster:`jpg/9.jpg`,
    },
    {
        id:10,
        songname:`Invisible`,
        artistname:`Dreisig`,
        poster:`jpg/10.jpg`,
    },
    {
        id:11,
        songname:`Where We Started `,
        artistname:`Jex`,
        poster:`jpg/11.jpg`,
    },
    {
        id:12,
        songname:`Control`,
        artistname:`Jex`,
        poster:`jpg/12.jpg`,
    },
    {
        id:13,
        songname:`Dreams`,
        artistname:`Skinner`,
        poster:`jpg/13.jpg`,
    },
    {
        id:14,
        songname:`Blank`,
        artistname:`Disfigure`,
        poster:`jpg/14.jpg`,
    },
    {
        id:15,
        songname:`Dreamer`,
        artistname:`Alan walker`,
        poster:`jpg/15.jpg`,
    },
    {
        id:16,
        songname:`Redemption`,
        artistname:`Riell`,
        poster:`jpg/16.jpg`,
    },
    {
        id:17,
        songname:`No Rival`,
        artistname:`Maestro`,
        poster:`jpg/17.jpg`,
    },
    {
        id:18,
        songname:`Feel Good`,
        artistname:`Cole`,
        poster:`jpg/18.jpg`,
    },
    {
        id:19,
        songname:`Cyberpunk`,
        artistname:`Brhon`,
        poster:`jpg/19.jpg`,
    },
    {
        id:20,
        songname:`The Ghost`,
        artistname:`Niviro`,
        poster:"jpg/20.jpg",
    }
];

Array.from(document.getElementsByClassName('song')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src=songarr[i].poster;
    e.getElementsByTagName('h5')[0].innerText=songarr[i].songname;
    e.getElementsByTagName('h6')[0].innerText=songarr[i].artistname;
});

let play=document.querySelector('.play-pause');
play.addEventListener('click',()=>{
    if(music.paused||music.currentTime<=0)
    {
        music.play();
        document.querySelector('.play-pause').src=`svg/pause.svg`
    }
    else{
        music.pause();
        document.querySelector('.play-pause').src=`svg/play.svg`
    }
    
});

let a=1;   
function autoplay(){
    let autoplayElement = document.querySelector('#autoplay');
    setInterval(() => {
        if(a<=6){
            autoplayElement.src=`svg/${a}.svg`;
            a++;
        }
        else{
            a=1;
            autoplayElement.src=`svg/${a}.svg`;
        }
    }, 5000);
}
autoplay();

 
let left=document.querySelector('#left');
let right=document.querySelector('#right')
let more=document.querySelector('.moresongs');
right.addEventListener('click',()=>{
    more.scrollLeft+=120;
});
left.addEventListener('click',()=>{
    more.scrollLeft-=120;
});
let index=0;
Array.from(document.getElementsByClassName('song')).forEach((e)=>{
    e.addEventListener('click',(event)=>{
        index=event.currentTarget.id;
        music.src=`mp3/${index}.mp3`;
        document.querySelector('#cover').src=`jpg/${index}.jpg`;
        document.querySelector('.play-pause').src=`svg/pause.svg`;
        document.querySelector('#covername').innerText=songarr[index].songname;
        document.querySelector('#coversinger').innerText=songarr[index].artistname;
        music.play(); 
    });
});

const backward=document.querySelector('.back');
const forward=document.querySelector('.next');
backward.addEventListener('click',()=>{
    index=index-1;
    music.src=`mp3/${index}.mp3`;
    document.querySelector('#cover').src=`jpg/${index}.jpg`;
    document.querySelector('.play-pause').src=`svg/pause.svg`;
    document.querySelector('#covername').innerText=songarr[index].songname;
    document.querySelector('#coversinger').innerText=songarr[index].artistname;
    music.play(); 
});
forward.addEventListener('click',()=>{
    index=index+1;
    music.src=`mp3/${index}.mp3`;
    document.querySelector('#cover').src=`jpg/${index}.jpg`;
    document.querySelector('.play-pause').src=`svg/pause.svg`;
    document.querySelector('#covername').innerText=songarr[index].songname;
    document.querySelector('#coversinger').innerText=songarr[index].artistname;
    music.play(); 
});

let start=document.querySelector('#start');
let end=document.querySelector('#end');

music.addEventListener('timeupdate',()=>{
    let current=music.currentTime;
    let duration=music.duration;
    let min1=Math.floor(current/60);
    let sec1=Math.floor(current%60);
    let min2=Math.floor((duration)/60);
    let sec2=Math.floor((duration)%60);
    if(sec1<10 ){
        sec1=`0${sec1}`
    }
    if(sec2<10 ){
        sec2=`0${sec2}`
    }
    start.innerText=`0${min1}:${sec1}`;
    end.innerText=`0${min2}:${sec2}`;
    let time=document.querySelector('#timebar');
    let progress=(current/duration)*100;
    time.value=progress;
    time.addEventListener('change',()=>{
        music.currentTime=(time.value*music.duration)/100;
    })

});
let vol=document.querySelector('#volbar');
let volsymbol=document.querySelector('#sound');

vol.addEventListener('change',()=>{
    music.volume=vol.value/100;
    if(vol.value<1){
        volsymbol.src=`svg/mute.svg`;
    }
    else{
        volsymbol.src=`svg/volume.svg`;
    }
});
alert(`Use Pc`)