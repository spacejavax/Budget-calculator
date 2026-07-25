import {useEffect, useState} from 'react'

function CoinGame() {
// All variables needed in the game
const [playerx, setplayerX] = useState(50)
const [coinx, setcoinx] = useState(50)
const [coiny, setcoinY] = useState(0)
const [lives, setlives] = useState(3)
const [score, setscore] = useState(0)
const [gameover, setgameover] = useState(false)

// The players position; can move with mouse
function handleMouseMove(event) {
    const gameArea = event.currentTarget.getBoundingClientRect()
    const mouseXInsideGameArea = event.clientX - gameArea.left
    const newplayerX = (mouseX / gameArea.width) * 100
    const clampedX= Math.max(5, Math.min(newplayerX, 95))
    setplayerx(clampedX)
}

useEffect(()) => {
    const fallInterval = setInterval (() => {
        setcoinY((currentY) => {
            const hasReachedBottom = currentY > 90
            if (hasReachedBottom) {
                const randomX = Math.floor(Math.random() * 80) + 10 //+ 10 bc interval should be from 10-90, preventing the coin to exist almost outside the game area
                setcoinx(randomX)
                return 0
            }
        } 
    })
}
retun (

    <div
    className="coin"
    style = {{
    left: `${coinx}%`,
    top: `${coiny}%`
    }}
>
    🪙  
</div>
<div
    className="player"
    style={{left: `${playerx}%`}}
>
(˶˃ ᵕ ˂˶) 
</div>
</div>
)
}


