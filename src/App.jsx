import { useState } from 'react'
import './App.css'

function App() {
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [monthlyExpenses, setMonthlyExpenses] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  const [savedAmount, setsavedAmount] = useState('')
  const remainingAmount = Math.max(
  Number(targetAmount || 0) - Number(savedAmount || 0),
  0
)
  return (
    <main>
      <h1>Budgetkalkylator</h1>
      <p>Planera ditt sparmål och följ dina framsteg.</p>

      <label htmlFor="monthlyIncome">
        Inkomst per månad
      </label>

      <input
        id="monthlyIncome"
        type="number"
        min="0"
        placeholder="Exempel: 5000"
        value={monthlyIncome}
        onChange={(event) => setMonthlyIncome(event.target.value)}
      />

      <p>Din månadsinkomst: {monthlyIncome || 0} kr</p>
      <label htmlFor="monthlyExpenses">
        Utgifter per månad
      </label>

      <input 
      id="monthlyExpenses"
      type="number"
      min="0"
      placeholder="Exempel: 1000"
      value={monthlyExpenses}
      onChange={(event) => setMonthlyExpenses(event.target.value)}
    />

    <p>
      Kvar efter utgifter:{' '}
      {Number(monthlyIncome || 0) - Number(monthlyExpenses || 0)} kr
    </p>
    </main>
  )
}

export default App