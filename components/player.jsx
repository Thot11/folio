import React, { useEffect, useState } from 'react';

const Player = ({}) => {

  const [isMoveRight, setIsMoveRight] = useState(false);
  const [isMoveLeft, setIsMoveLeft] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown) 
    document.addEventListener('keyup', handleKeyUp) 

    return () => {
      document.removeEventListener('keydown', handleKeyDown) 
      document.removeEventListener('keyup', handleKeyUp) 
    }
  }, [])

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
    <div className={`player ${isMoveRight && 'playerToRight'} ${isMoveLeft && 'playerToLeft'}`}>
      <div className="playerHead"/>
      <div className="playerBodyContainer">
        <div className="playerLeftArm"/>
        <div className="playerBody"/> 
        <div className="playerRightArm"/>
      </div>
      <div className="playerLegsContainer">
        <div className="playerLeftLeg"/>
        <div className="playerRightLeg"/>
      </div>
    </div>
  );
};

export default Player;
