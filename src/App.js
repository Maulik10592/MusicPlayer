import { useEffect, useRef, useState } from 'react';
//import axios from 'axios';
import './App.css';

function App() {

  // const [music, setMusic] = useState([]);
  
  // const getMusic = async() => {
  //   const url = 'https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key': 'e01d730154mshb3713b70c3d86b6p16500cjsn1beb876cff66',
  //         'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.text();
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  // }

  // useEffect(()=>{
  //   getMusic();
  // });

  // default song play
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Chasing',
    songArtist: 'NEFFEX',
    songSrc: './Assets/Songs/Chasing - NEFFEX.mp3',
    songAvatar: './Assets/Images/Chasing.jpg',
  });

  const [audioProgress, setAudioProgress] = useState(60);
  
  let avatarClass = ['objectFitCover', 'objectFitContain', 'none'];
  const [avatarClassIndex, setAvatarClassIndex] = useState(0);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const currentAudio = useRef();
  
  const [musicIndex, setMusicIndex] = useState(0);

  const [musicTotalLength, setMusicTotalLength] = useState('04 : 40');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  
  const [videoIndex, setVideoIndex] = useState(0);

  // song list
  const musicAPI = [
    {
      id: 1,
      songName: 'Chasing',
      songArtist: 'NEFFEX',
      songSrc: './Assets/Songs/Chasing_NEFFEX.mp3',
      songAvatar: './Assets/Images/Chasing.jpg',
    },
    {
      id: 2,
      songName: 'AURORA',
      songArtist: 'Runaway',
      songSrc: './Assets/Songs/AURORA_Runaway.mp3',
      songAvatar: './Assets/Images/AURORA.jpg',
    },
    {
      id: 3,
      songName: 'Inspired',
      songArtist: 'NEFFEX',
      songSrc: './Assets/Songs/Inspired_NEFFEX.mp3',
      songAvatar: './Assets/Images/Inspired.jpg',
    },
    {
      id: 4,
      songName: 'Catch Me If I Fall',
      songArtist: 'NEFFEX',
      songSrc: './Assets/Songs/Catch_Me_If_I_Fall_NEFFEX.mp3',
      songAvatar: './Assets/Images/Catch_Me_If_I_Fall.jpg',
    },    
    {
      id: 5,
      songName: 'As You Were',
      songArtist: 'TrackTribe',
      songSrc: './Assets/Songs/As You Were - TrackTribe.mp3',
      songAvatar: './Assets/Images/As_You_Were.jpg',
    },
    {
      id: 6,
      songName: 'Coast',
      songArtist: 'Anno Domini Beats',
      songSrc: './Assets/Songs/Coast - Anno Domini Beats.mp3',
      songAvatar: './Assets/Images/Coast.jpg',
    },
    {
      id: 7,
      songName: 'Here it Comes',
      songArtist: 'TrackTribe',
      songSrc: './Assets/Songs/Here it Comes - TrackTribe.mp3',
      songAvatar: './Assets/Images/Here_It_Comes.jpg',
    },
    {
      id: 8,
      songName: 'No Mercy',
      songArtist: 'TrackTribe',
      songSrc: './Assets/Songs/No Mercy - TrackTribe.mp3',
      songAvatar: './Assets/Images/No_Mercy.jpg',
    },
    {
      id: 9,
      songName: 'Put It',
      songArtist: 'TrackTribe',
      songSrc: './Assets/Songs/Put It - TrackTribe.mp3',
      songAvatar: './Assets/Images/Put_It.jpg',
    },
    {
      id: 10,
      songName: 'Read All Over',
      songArtist: 'Nathan Moore',
      songSrc: './Assets/Songs/Read All Over - Nathan Moore.mp3',
      songAvatar: './Assets/Images/Read_All_Over.jpg',
    },
  ]

  // Videos list
  const videosAPI = [
    './Assets/Videos/video1.mp4',
    './Assets/Videos/video2.mp4',
    './Assets/Videos/video3.mp4',
    './Assets/Videos/video4.mp4',
    './Assets/Videos/video5.mp4',
    './Assets/Videos/video6.mp4',
    './Assets/Videos/video7.mp4',
    './Assets/Videos/video8.mp4',
    './Assets/Videos/video9.mp4',
    './Assets/Videos/video10.mp4',
  ]

  // Background Videos change function
  const handleChangeBackground = () => {
    if(videoIndex >= videosAPI.length - 1){
      setVideoIndex(0);
    } else{
      setVideoIndex(videoIndex + 1);
    }
  }
  

  // Music ProgressBar change function
  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  }

  // avatar class change function
  const handleAvatar = () => {
    if(avatarClassIndex >= avatarClass.length - 1){
      setAvatarClassIndex(0);
    } else{
      setAvatarClassIndex(avatarClassIndex + 1);
    }
  }

  // play song function
  const handlePlay = () => {
    if(currentAudio.current.paused){
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else{
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  }

  // prev song play function
  const handlePrevPlay = () => {
    if(musicIndex === 0){
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else{
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  }
  
  // next song play function
  const handleNextPlay = () => {
    if(musicIndex >= musicAPI.length - 1){
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else{
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  }

  // Update Current Song Details function
  const updateCurrentMusicDetails = (number) => {
    let musicObj = musicAPI[number];
    currentAudio.current.src = musicObj.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObj.songName,
      songArtist: musicObj.songArtist,
      songSrc: musicObj.songSrc,
      songAvatar: musicObj.songAvatar,
    });
    setIsAudioPlaying(true);
  }

  // Update Current Song Time function
  const handleAudioUpdate = () => {
    // input total length of audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength =  `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength);
    
    // input total length of audio
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentTotalTime =  `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentTotalTime);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress) ? 0 : progress);
  }

  return (
    <>
      <div className='container'>
        <audio src="./Assets/Songs/Chasing_NEFFEX.mp3" ref={currentAudio} onEnded={handleNextPlay} onTimeUpdate={handleAudioUpdate}></audio>
        <video src={videosAPI[videoIndex]} className='backgroundVideo' autoPlay muted loop></video>
        <div className='blackScreen'></div>
        <div className='musicContainer'>
          <p className='musicPlayer'>Music Player</p>
          <p className='musicTitle'>{currentMusicDetails.songName}</p>
          <p className='musicArtist'>{currentMusicDetails.songArtist}</p>
          <img src={currentMusicDetails.songAvatar} onClick={handleAvatar} className={avatarClass[avatarClassIndex]} alt='Song Avatar' id='songAvatar' />
          <div className='musicTimerBox'>
            <p className='musicCurrentTime'>{musicCurrentTime}</p>
            <p className='musicTotalTime'>{musicTotalLength}</p>
          </div>
          <input type='range' name='musicProgressBar' className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
          <div className='musicControlerBox'>
            <i className='fa-solid fa-backward btnPrev' onClick={handlePrevPlay}></i>
            <i className={`fa-solid ${isAudioPlaying? 'fa-pause-circle' : 'fa-circle-play' } btnPlay`} onClick={handlePlay}></i>
            <i className='fa-solid fa-forward btnNext' onClick={handleNextPlay}></i>
          </div>
        </div>
        <div className='changeBackgroundBtn' onClick={handleChangeBackground}>Change Background</div>
      </div>
    </>
  );
}

export default App;