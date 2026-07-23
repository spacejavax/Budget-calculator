import {useEffect, useRef, useState } from 'react'
import confetti from 'canvas-confetti'
import CoinGame from './CoinGame'
import './App.css'


function App() {
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [monthlyExpenses, setMonthlyExpenses] = useState('')
  const [targetAmount, setTargetAmount] = useState(
    () => localStorage.getItem('targetAmount') || '')
  const [savedAmount, setSavedAmount] = useState('')
  const [savingsHistory, setSavingsHistory] = useState(() => {
    const savedHistory = localStorage.getItem('savingsHistory')
    return savedHistory ? JSON.parse(savedHistory) : []})

  const totalSaved = savingsHistory.reduce(
    (total, saving) => total + saving.amount,
    0 )
  
  const remainingAmount = Math.max(
    Number(targetAmount || 0) - totalSaved,)

  const moneyAfterExpenses =
    Number(monthlyIncome || 0) - Number(monthlyExpenses || 0)
  const goalReached = 
  Number(targetAmount) > 0 && totalSaved >= Number(targetAmount)
  const wasGoalReached = useRef(false)
  useEffect(() => { if (goalReached && !wasGoalReached.current) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: {y: 0.6},
        colors: ['#ff8fb1', '#ffc1d4', '#ffc1d4', '#ffffff', '#b7e4c7'],})
    }

    wasGoalReached.current = goalReached}, [goalReached])

  useEffect(() => {
        localStorage.setItem(
          'savingsHistory',
          JSON.stringify(savingsHistory))}, [savingsHistory])
      useEffect(() => {
        localStorage.setItem('targetAmount', targetAmount)}, [targetAmount])

  function addSaving() {
    const amount = Number(savedAmount)
    if (amount <=0) {
      return}
    const newSaving = {
    id: Date.now(),
    amount: amount,
    date: new Date().toLocaleDateString('sv-SE'),}
    setSavingsHistory([...savingsHistory, newSaving])
    setSavedAmount('')}

  function startnewgoal() {
    setTargetAmount('')
    setSavedAmount('')
    setSavingsHistory([])
    wasGoalReached.current = false }
  
  function resetEverything() {
    setMonthlyIncome('')
    setMonthlyExpenses('')
    setTargetAmount('')
    setSavingsHistory([])
    localStorage.removeItem('targetAmount')
    localStorage.removeItem('savingshistory')
    wasGoalReached.current = false }
  

  return (
    <div className="welcome">
      <span className="sticker flower-one">🌸</span>
      <span className="sticker flower-two">🌸</span>
      <span className="sticker flower-three">🌸</span>
      <span className="sticker flower-four">🌸</span>
      <span className="sticker flower-five">🌸</span>
      <span className="sticker flower-six">🌸</span>
      <span className="sticker flower-seven">🌸</span>
      <span className="sticker flower-eight">🌸</span>
      <span className="sticker flower-nine">🌸</span>
      <span className="sticker flower-ten">🌸</span>
      <span className="sticker flower-eleven">🌸</span>
      <span className="sticker flower-twelve">🌸</span>
      <span className="sticker flower-thirteen">🌸</span>
      <span className="sticker flower-fourteen">🌸</span>

      <h1>WELCOME!</h1>
      <main className="calculator">
        <h2 className="calculator-heading">My savings goal</h2>
      <p className="description">
        Plan your savings goal and follow your progress. </p>
      <div className="input-group">
      <label htmlFor="monthlyIncome">Income per month
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
      <label htmlFor="monthlyExpenses">Spending per month</label>

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
      What is your saving goal?
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

  <div className="input-group">

    <label htmlFor="savedAmount">
      How much did you save this month?
      </label>

    <input
      id="savedAmount"
      type="number"
      min="0"
      placeholder=""
      value={savedAmount}
      onChange={(event) => setSavedAmount(event.target.value)} />
      <button type="button" onClick={addSaving} disabled={Number(savedAmount) <=0}>
      Add saved money
    </button>
  </div>

    <p>
      Money after expenses: {moneyAfterExpenses} kr
    </p>
    <p className="result">
      Total saved: {totalSaved} sek
    </p>
     <p>You have {remainingAmount} kr left for you savings goal</p>
    {savingsHistory.length > 0 && (
      <table className="savings-table">
        <thead>
          <tr>
            <th>Date</th>
              <th>Deposit</th>
            </tr>
          </thead>
            <tbody>
            {savingsHistory.map((saving) => (
              <tr key={saving.id}>
              <td>{saving.date}</td>
              <td>{saving.amount} kr</td>
            </tr>
            ))}
          </tbody>
        </table>

    )}
      {goalReached && (
      <div className= "goal-celebration">
        <span className= "celebration-emoji">🌸</span>
        <h2>Good job!</h2>
        <p>You have reached your savings goal!</p>
        <button type="button" onClick={startnewgoal}>
         New goal: 
        </button>
      </div>
        )}
    <button
      type="button" onClick={resetEverything}
    > Reset Everything
    </button>
    </main>
  </div>
    )
}

export default App