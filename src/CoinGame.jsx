import {useEffect, useState} from 'react'


// All variables needed in the game
const [playerx, set playerx] = useState(50)
const [coinx, setcoinx] = useState(50)
const [coiny, setcoiny] = useState(0)
const [lives, setlives] = useState(3)
const [score, setscore] = useState(0)
const [gameover, setgameover] = useState(false)

// The players position 
function moveLeft() 
    setplayerx((currentx)) => Math.max(currentx - 10, 5)

