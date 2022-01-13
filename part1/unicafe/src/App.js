import React, {useState} from 'react'


const Header = ({text}) => {
  return (
    <div>
       <h1>
        {text}
        </h1>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({text, number}) => {
  return (
    <tr>
    <td> {text} </td>
    <td> {number} </td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if(good===0 && bad===0 && neutral===0) return <p>No feedback given</p>
  return (
    <table>
      <tbody>
          <StatisticLine text="good" number={good}></StatisticLine>
          <StatisticLine text="neutral" number={neutral}></StatisticLine>
          <StatisticLine text="bad" number={bad}></StatisticLine>
          <StatisticLine text="total" number={total(good, neutral, bad)}></StatisticLine>
          <StatisticLine text="average" number={average(good, neutral, bad)}></StatisticLine>
          <StatisticLine text="positive" number={positive(good, neutral, bad)}></StatisticLine>
      </tbody>
    </table>
  )
}

const total = function(good, neutral, bad) {
  return good + neutral + bad
}

const average = function (good, neutral, bad) {
  if(good===0 && bad===0 && neutral===0) return 0
  return (good - bad)/total(good, neutral, bad)
}

const positive = function (good, neutral, bad) {
  if(good===0 && bad===0 && neutral===0) return 0
  return (good)/total(good, neutral, bad)*100 + "%"
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="Give feedback" />
      <Button onClick={() => setGood(good + 1)} text="good"></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"></Button>
      <Button onClick={() => setBad(bad + 1)} text="bad"></Button>
      <Header text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
}

export default App;
