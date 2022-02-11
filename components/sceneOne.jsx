import React, { useEffect, useState } from 'react';
import Player from './player';

const SceneOne = ({}) => {

  const [isMoveRight, setIsMoveRight] = useState(false);
  const [isMoveLeft, setIsMoveLeft] = useState(false);
  const [leftPosition, setLeftPosition] = useState(0);
  const [lightOpen, setLightOpen] = useState(false);
  

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown) 
    document.addEventListener('keyup', handleKeyUp) 

    return () => {
      document.removeEventListener('keydown', handleKeyDown) 
      document.removeEventListener('keyup', handleKeyUp) 
    }
  }, [])

  useEffect(() => {
    
    if(isMoveRight) {
      setLeftPosition(leftPosition + 0.08);
    }   
    
    if(isMoveLeft && leftPosition > 0) {
      
      setLeftPosition(leftPosition - 0.08);
    }
  },)

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowRight' || e.key === 'd' ) {
      setIsMoveRight(true)
    }
    if(e.key === 'ArrowLeft' || e.key === 'q' ) {
      setIsMoveLeft(true)
    }
  }

  const handleKeyUp = () => {
    setIsMoveRight(false)
    setIsMoveLeft(false)
  }

  return (
    <div className="sceneOne">
      <div className="lightBulbContainer">
        <div className="lightBulb" />
        <div className="switch" />
      </div>
      <div className="playerContainer">
        <div className="playerWrapper" style={{left: leftPosition}}>
          <Player />
        </div>
      </div>
      <div className="floor"></div>
      <div className="filter"></div>
    </div>
  );
};

export default SceneOne;