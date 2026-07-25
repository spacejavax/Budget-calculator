import {useEffect, useState} from 'react'

function CoinGame() {
// All variables needed in the game
const [playerX, setplayerX] = useState(50)
const [coinx, setcoinx] = useState(50)
const [coiny, setcoiny] = useState(0)
const [lives, setlives] = useState(3)
const [score, setscore] = useState(0)
const [gameover, setgameover] = useState(false)

// The players position; can move with mouse
function handleMouseMove(event) {
    const gameArea = event.currentTarget.getBoundingClientRect()
    const mouseXInsideGameArea = event.clientX - gameArea.left
    const newplayerX = (mouseXInsideGameArea / gameArea.width) * 100
    const clampedX= Math.max(5, Math.min(newplayerX, 95))
    setplayerX(clampedX)
}

useEffect(() => {
    const gameLoop = setInterval (() => {
        setcoiny((currentY) => {
            const hasReachedBottom = currentY > 90
            if (hasReachedBottom) {
                const randomX = Math.floor(Math.random() * 80) + 10 //+ 10 bc interval should be from 10-90, preventing the coin to exist almost outside the game area
                setcoinx(randomX)
                return 0
            }
                return currentY + 2
            })
            }, 50)
            return () => clearInterval(gameLoop)
        }, [])
return (
    <div 
    onMouseMove={handleMouseMove}
    style={{
        width: '100%',
        height: '400px',
        backgroundColor: '#f965be',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'none'
    }}
    >
        <div
        style={{
            position: 'absolute',
            left: `${coinx}%`,
            top: `${coiny}%`,
            fontSize: '24px',
            transform:'translate(-50%, -50%)'

        }}
        >
        🪙   
        </div>
        <div
      style={{
        position: 'absolute',
        left: `${playerX}%`,
        bottom: '20px',
        fontSize: '20px',
        transform: 'translateX(-50%)',
        color: 'white'
      }}
    >
      (˶˃ ᵕ ˂˶)
    </div>
  </div>
)
}

export default CoinGame