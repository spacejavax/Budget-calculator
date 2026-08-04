import {useEffect, useState} from `react`;

function PacMan() {
    const [playerX, setPlayerX] = useState(1);
    const [playerY, setPlayerY] = useState(1);

    const boardSize = 10;

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "ArrowLeft") {
                setPlayerX((currentX) => Math.max(0, currentX - 1));
            
            }
            if (event.key === "ArrowRight") {
            setPlayerX((currentX) => Math.min(boardSize -1, currentX + 1));
        }
            if (event.key === "ArrowUp") {
                setPlayerY((currentY) => Math.max(0, currentY -1));
            }
            if (event.key === "ArrowDown") {
                setPlayerY((currentY) => Math.min(boardSize -1, currentY + 1)
            );
        }
            }
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    return (
        <div className="pacman-game">
            <div className="pacman-board">
                <div className="pacman-player"
                style={{
                    left: `${playerX * 10}%`,
                    top: `${playerY * 10}%`,
                }}
                >
                 🌜
                 </div>
                 </div>
                 </div>
    );
}  

export default PacMan;