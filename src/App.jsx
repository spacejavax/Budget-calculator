import {useEffect, useRef, useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

function App() {
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [monthlyExpenses, setMonthlyExpenses] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  const [savedAmount, setSavedAmount] = useState('')
  const remainingAmount = Math.max(
    Number(targetAmount || 0) - Number(savedAmount || 0),
    0
)

  const moneyAfterExpenses =
    Number(monthlyIncome || 0) - Number(monthlyExpenses || 0)
  const goalReached = 
  Number(targetAmount) > 0 && Number(savedAmount) >= Number(targetAmount)
  const wasGoalReached = useRef(false)
  useEffect(() => { if (goalReached && !wasGoalReached.current) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: {y: 0.6},
        colors: ['#ff8fb1', '#ffc1d4', '#ffc1d4', '#ffffff', '#b7e4c7'],
      })
    }

    wasGoalReached.current = goalReached}, [goalReached])

  return (
    <main>
      <h1>My savings goal</h1>
      <p className="description">
        Plan your savings goal and follow your progress. </p>
      <div className="input-group">
      <label htmlFor="monthlyIncome">Inkomst per månad
      </label>
      <input
        id="monthlyIncome"
        type="number"
        min="0"
        placeholder=""
        value={monthlyIncome}
        onChange={(event) => setMonthlyIncome(event.target.value)}
          /> 
      </div>

      <div className="input-group">
      <label htmlFor="monthlyExpenses">Utgifter per månad</label>

      <input 
      id="monthlyExpenses"
      type="number"
      min="0"
      placeholder=""
      value={monthlyExpenses}
      onChange={(event) => setMonthlyExpenses(event.target.value)}
    />
      </div>

    <div className="input-group">
    <label htmlFor="targetAmount">
      Hur mycket vill du spara?
    </label>

    <input
    id="targetAmount"
    type="number"
    min="0"
    placeholder=""
    value={targetAmount}
    onChange={(event) => setTargetAmount(event.target.value)}
    />
  </div>

  <div className="">

    <label htmlFor="savedAmount">
      Hur mycket har du redan sparat?
      </label>

    <input
      id="savedAmount"
      type="number"
      min="0"
      placeholder=""
      value={savedAmount}
      onChange={(event) => setSavedAmount(event.target.value)}
    />
  </div>
      

    <p className="result">
      Du har {remainingAmount} kr kvar till ditt sparmål
    </p>

    <p>Kvar efter utgifter: {moneyAfterExpenses} kr </p>

      {goalReached && (
      <div className= "goal-celebration">
        <span className= "celebration-emoji">🎉</span>
        <h2>Good job!</h2>
        <p>You have reached your savings goal</p>
      </div>
        )}
    </main>
  )
}

export default App