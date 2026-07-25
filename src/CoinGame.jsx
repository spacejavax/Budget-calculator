import {useEffect, useState} from 'react'

function CoinGame() {
// All variables needed in the game
const [playerX, setplayerX] = useState(50)
const [coinx, setcoinx] = useState(50)
const [coiny, setcoiny] = useState(0)
const [lives, setlives] = useState(3)
const [score, setscore] = useState(0)
const [gameover, setgameover] = useState(false)
const [coinvisible, setcoinvisible] = useState(true)

// The players position; can move with mouse
function handleMouseMove(event) {
    const gameArea = event.currentTarget.getBoundingClientRect()
    const mouseXInsideGameArea = event.clientX - gameArea.left
    const newplayerX = (mouseXInsideGameArea / gameArea.width) * 100
    const clampedX= Math.max(5, Math.min(newplayerX, 95))
    setplayerX(clampedX)
}

useEffect(() => {
    if (gameover || !coinvisible) {
      return
    }
    const gameLoop = setInterval(() => {
      setcoiny((currenty) => currenty + 2)
    }, 50)
    return() => clearInterval(gameLoop)
  }, [gameover, coinvisible])

  useEffect(() => {
    if (coiny < 80 || gameover || !coinvisible) {
      return
    }
  const horizontalDistance = Math.abs(coinx - playerX)
  const coinCaught = horizontalDistance < 15

  if (coinCaught) {
    setscore((currentScore) => currentScore + 1)
    setcoinvisible(false)
    setTimeout(() => {
    setcoinx(Math.floor(Math.random() * 80) + 10)
    setcoiny(0)
    setcoinvisible(true)
   }, 1000)
  } else {
    setlives((currentLives) => Math.max(currentLives - 1, 0))
  
    setcoiny(0)
    setcoinx(Math.floor(Math.random() * 80) + 10)}},
[coiny, coinx, playerX, gameover, coinvisible])

  function restartGame() {
    setplayerX(50)
    setcoinvisible(Math.floor(Math.random() * 80) + 10)
    setcoiny(0)
    setlives(3)
    setscore(0)
    setgameover(false)
    setcoinvisible(true)
  }

 useEffect(() => {
    if (lives === 0) {
    console.log("Game Over!") 
    setgameover(true)
    }
  }, [lives])

return (
    <div className="coin-game">
       <div className="game-area"
    onMouseMove={handleMouseMove}
    >
      <div className="game-stats">
        <div className="stat-box">
          ⭐ Score: {score}
          </div>
    
          <div className="stat-box life-hearts">
          {'❤️'.repeat(lives)}
        </div>
   </div>

    {gameover ? (
      <div className="game-over">
        <h2>Game Over!</h2>
        <p className="final-score" >
          Your score: {score}
          </p>
        <button type="button" onClick={restartGame}>
        Play again
        </button>
        </div>
         ) : (
        <>
    {coinvisible && (
   <div
    className="coin"
      style={{
        left: `${coinx}%`,
        top: `${coiny}%`,
    }}
    >
      🪙
    </div>
    )}

    <div
      className="player"
      style={{
        left: `${playerX}%`,
      }}
    >
      🐷
    </div>
    </>
   )}
   <div className="grass"></div>
  
  </div>

  </div>
)
}


export default CoinGame