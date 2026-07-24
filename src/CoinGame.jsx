function CoinGame() {
    return(
        <section className="coin-game">
<<<<<<< Updated upstream
        <h2>Catch</h2>
=======
        <h2>Catch the Coins</h2>

        <p>Points: 0</p>
        <p>Lives: ❤️❤️❤️</p>
        <div className="game-area">
            <div className="coin">🪙</div>
            <div className="player">🌸</div>
        </div>
>>>>>>> Stashed changes
        </section>
    )
}

function CoinGame()
    const[player1, setplayer1] = useState(50)

    function moveLeft() {
        setplayer1((currentPosition) =>
            Math.max(currentPosition - 10, 5)) }
    function moveright() {
        setplayer1((currentPosition) =>
        Math.min(currentPosition + 10, 95))
    }

    return (
       