import React, { useState } from 'react'


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Header = ({text}) => {
  return (
    <div>
       <h1>
        {text}
        </h1>
    </div>
  )
}

const Anecdote = ({text}) => {
  return (
    <div>
       <p>
        {text}
        </p>
    </div>
  )
}

const Votes = ({ points }) => {
  let voteText = "votes"
  if(points===1) voteText = "vote"
  if(points===undefined) return <></>
  return (
    <div>
       <p>
        Has {points} {voteText}
        </p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
 
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0])

  const handleSelectAnecdote = () => {
    setSelected(Math.floor((Math.random() * 6) + 1));
  }

  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selected]=newPoints[selected] + 1
    setPoints(newPoints)
  }

  const getMostVotedAnecdote = () => {
    let largestVote = Math.max(...points);
    if(largestVote===0) return ""
    return points.indexOf(largestVote)
  }

  return (
    <div>
      <Header text="Anecdote of the day"></Header>
      <Anecdote text={anecdotes[selected]}></Anecdote>
      <Votes points={points[selected]}></Votes>
      <Button onClick={handleVote} text="Vote"></Button>
      <Button onClick={handleSelectAnecdote} text="Next Anecdote"></Button>
      <Header text="Anecdote with most votes"></Header>
      <Anecdote text={anecdotes[getMostVotedAnecdote()]}></Anecdote>
      <Votes points={points[getMostVotedAnecdote()]}></Votes>
    </div>
  )
}

export default App
