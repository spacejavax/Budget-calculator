import { useEffect, useState } from 'react'

function CoinGame() {
  // Game variables
  const [playerX, setPlayerX] = useState(50)
  const [lives, setLives] = useState(3)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [fallingItems, setFallingItems] = useState([])

  // Moves the player horizontally with the mouse
  function handleMouseMove(event) {
    const gameArea = event.currentTarget.getBoundingClientRect()

    const mouseXInsideGameArea =
      event.clientX - gameArea.left

    const newPlayerX =
      (mouseXInsideGameArea / gameArea.width) * 100

    // Stops the player from leaving the game area
    const clampedX = Math.max(
      5,
      Math.min(newPlayerX, 95)
    )

    setPlayerX(clampedX)
  }

  // Creates a new coin or bomb every 900 milliseconds
  useEffect(() => {
    if (gameOver) {
      return
    }

    const spawnTimer = setInterval(() => {
      // 25% chance of a bomb and 75% chance of a coin
      const randomType =
        Math.random() < 0.25 ? 'bomb' : 'coin'

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
  }, [gameOver])

  // Moves all coins and bombs downward
  useEffect(() => {
    if (gameOver) {
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
  }, [gameOver])

  // Checks whether an item touches the player
  useEffect(() => {
    if (gameOver) {
      return
    }

    let scoreAdded = 0
    let livesLost = 0
    const itemsToRemove = []

    fallingItems.forEach((item) => {
      const horizontalDistance = Math.abs(
        item.x - playerX
      )

      const touchingPig = 
      item.y >= 76 &&
      item.y <90 && 
      horizontalDistance < 15

      const touchingGrass = item.y >= 90

      if (item.type === 'coin') {
        if(touchingPig) {
        scoreAdded = scoreAdded + 1
        itemsToRemove.push(item.id)
      } else if (touchingGrass) {
        livesLost = livesLost + 1
        itemsToRemove.push(item.id)
      }
    }
      if (item.type === 'bomb') {
        if (touchingPig) {
        livesLost = livesLost + 1
        itemsToRemove.push(item.id)
      } else if  (touchinggrass) {
        itemsToRemove.push(item.id)
      }
    }
    
    })

    if (scoreAdded > 0) {
      setScore(
        (currentScore) => currentScore + scoreAdded
      )
    }

    if (livesLost > 0) {
      setLives((currentLives) =>
        Math.max(currentLives - livesLost, 0)
      )
    }

    // Removes every item that reached the player area
    setFallingItems((currentItems) =>
      currentItems.filter((item) => item.y < 82)
    )
  }, [fallingItems, playerX, gameOver])

  // Ends the game when the player has no lives
  useEffect(() => {
    if (lives === 0) {
      setGameOver(true)
    }
  }, [lives])

  // Resets all game variables
  function restartGame() {
    setPlayerX(50)
    setLives(3)
    setScore(0)
    setGameOver(false)
    setFallingItems([])
  }

  return (
    <div className="coin-game">
      <div
        className="game-area"
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

        {gameOver ? (
          <div className="game-over">
            <h2>Game Over!</h2>

            <p className="final-score">
              Your score: {score}
            </p>

            <button
              type="button"
              onClick={restartGame}
            >
              Play again
            </button>
          </div>
        ) : (
          <>
            {fallingItems.map((item) => (
              <div
                key={item.id}
                className="falling-item"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                }}
              >
                {item.type === 'coin' ? '🪙' : '💣'}
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
