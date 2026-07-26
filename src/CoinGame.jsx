import {useEffect, useState} from 'react'

function CoinGame() {
// All variables needed in the game
const [playerX, setplayerX] = useState(50)
const [lives, setlives] = useState(3)
const [score, setscore] = useState(0)
const [gameover, setgameover] = useState(false)
const [fallingItems, setFallingItems] = useState([])

// The players position; can move with mouse
function handleMouseMove(event) {
    const gameArea = event.currentTarget.getBoundingClientRect()
    const mouseXInsideGameArea = event.clientX - gameArea.left
    const newplayerX = (mouseXInsideGameArea / gameArea.width) * 100
    const clampedX= Math.max(5, Math.min(newplayerX, 95))
    setplayerX(clampedX)
}


useEffect(() => {
  if (gameover) {
    return
  }

  const itemsAtPlayer = fallingItems.items.filter(
    (item) => item.y >= 80
  )
  const spawnTimer = setInterval(() => {
    const randomType =
  Math.random() < 0.25 ? `bomb` : `coin`
  const newItem = {
    id: Date.now() + Math.random(),
    type: randomType,
    x: Math.floor(Math.random() * 80) + 10,
    y: 0,
  }
  setFallingItems((currentItems) => [
    ...currentItems,
    newItem,
  ])
}, 900)

return () => clearInterval(spawnTimer)
}, [gameover])

  function restartGame() {
    setplayerX(50)
    setcoinx(Math.floor(Math.random() * 80) + 10)
    setcoiny(0)
    setlives(3)
    setscore(0)
    setgameover(false)
    setcoinvisible(true)
    setFallingItems([])
  }

  useEffect(() => {
    if (gameover) {
      return
    }
    const movementTimer = setInterval(() => {
      setFallingItems((currentItems) =>
        currentItems.map((item) => ({
          ...item,
        y: item.y + 2,
        }))
      )
    }, 50)
    return () => clearInterval(movementTimer)
  }, [gameover])        
    

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
      {fallingItems.map((item) => (
        <div
        key={item.id}
        className="falling-item"
        style ={{
          left: `${item.x}%`,
          top: `${item.y}%`,
        }}
        >
          {item.type === `coin` ? `🪙` : `💣`}
          </div>
      ))}

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