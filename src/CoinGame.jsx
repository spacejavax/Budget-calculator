function CoinGame() {
    return(
        <section className="coin-game">
        <h2>Catch</h2>
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
       