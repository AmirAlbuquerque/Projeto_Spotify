import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faPlay,
  faPause,
  faForwardStep,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const formatTime = (timeInSeconds) => {
  const min = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const sec = Math.floor(timeInSeconds - min * 60)
    .toString()
    .padStart(2, "0");

  return `${min}:${sec}`;
};

const timeInSeconds = (time) => {
  const splitArray = time.split(":");
  const min = Number(splitArray[0]) * 60;
  const sec = Number(splitArray[1]);
  return min + sec;
};

const Player = ({
  duration,
  id,
  audio,
  indexSongsArray,
  isRandomActive,
  onToggleRandom,
  idRandomSong,
}) => {
  const audioPlayer = useRef(audio);
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);
  const currentIndex = indexSongsArray
    .filter((currSong) => currSong.songId === id)
    .map((song) => song.index)[0];
  const nextIndex = currentIndex == 199 ? 0 : currentIndex + 1;
  const previousIndex =
    currentIndex == 0 ? indexSongsArray.length - 1 : currentIndex - 1;

  const songPlayer = (index) => {
    const songToPlay = indexSongsArray.find(
      (currSong) => currSong.index == index
    );
    return songToPlay.songId;
  };

  const playOrPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setCurrentTime(formatTime(audioPlayer.current.currentTime));
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const intervalID = setInterval(() => {
        if (audioPlayer.current) {
          setCurrentTime(formatTime(audioPlayer.current.currentTime));

          progressBar.current.style.setProperty(
            "--_progress",
            (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
          );
        }
      }, 1000);
      return () => {
        clearInterval(intervalID);
      };
    } else {
      setCurrentTime(formatTime(0));
      progressBar.current.style.setProperty("--_progress", "0%");
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0;
    }
  }, [isPlaying]);

  const toggleRandom = () => {
    onToggleRandom(!isRandomActive);
  };
  return (
    <>
      <audio ref={audioPlayer} src={audio}></audio>
      <div className="player">
        <div className="player__bar-components">
          <Link
            to={
              isRandomActive
                ? `/song/${idRandomSong}`
                : `/song/${songPlayer(previousIndex)}`
            }
            className="player__bar-components--backward"
          >
            <FontAwesomeIcon
              icon={faBackwardStep}
              onClick={() => setIsPlaying(false)}
            />
          </Link>
          <FontAwesomeIcon
            className="player__bar-components--play"
            icon={isPlaying ? faPause : faPlay}
            onClick={() => playOrPause()}
          />
          <Link
            to={
              isRandomActive
                ? `/song/${idRandomSong}`
                : `/song/${songPlayer(nextIndex)}`
            }
            className="player__bar-components--forward"
          >
            <FontAwesomeIcon
              icon={faForwardStep}
              onClick={() => setIsPlaying(false)}
            />
          </Link>
          <div
            className={isRandomActive ? "active" : "shuffle"}
            onClick={toggleRandom}
          >
            <FontAwesomeIcon icon={faShuffle} />
          </div>
        </div>
        <div className="player__bar-time">
          <p>{currentTime}</p>
          <div className="player__bar-container">
            <div ref={progressBar} className="player__bar-progress"></div>
          </div>
          <p>{duration}</p>
        </div>
      </div>
    </>
  );
};

export default Player;
