'use client'
import { Ballot, Nominee } from '@/types'
import { useMemo, useState } from 'react'

type Props={
  ballots:Ballot[]
}

export default function BallotClientPage ({ ballots }:Props) {
  const [votes, setVotes] = useState(() => new Map<Ballot['title'], Nominee>())
  const isComplete = useMemo(() => votes.size === ballots.length, [votes.size, ballots.length])
  // const isComplete = useMemo(() => votes.size === ballots.length, [votes, ballots])
  // const isComplete = votes.size === ballots.length
  // const isComplete = ballots.every((ballot) => votes.has(ballot.title))
  function handleVote (ballotTitle:Ballot['title'], nominee:Nominee) {
    const draft = structuredClone(votes)
    draft.set(ballotTitle, nominee)
    setVotes(draft)
  }
  console.log(votes.size)
  function handleSubmit () {
    alert(Array.from(votes.entries()).map(([ballotTitle, nominee]) => `${ballotTitle.padEnd(25, ' ')}: ${nominee.title}`).join('\n'))
  }
  return (
    <section>
      {/* <pre>{JSON.stringify(ballots, null, 2)}</pre> */}
      {ballots.map((ballot) => (
        <article key={ballot.title}>
          <h3 style={{ marginLeft: '-22px' }}>{ballot.title}</h3>
          <ul>
            {ballot.items.map(nominee => (
              <li key={nominee.id} style={{ border: votes.get(ballot.title)?.id === nominee.id ? '1px solid red' : 'none' }}>
                <span>{nominee.title}</span>
                <button onClick={() => handleVote(ballot.title, nominee)}>Vote</button>
              </li>
            ))}
          </ul>
        </article>
      ))}
      <button disabled={!isComplete} type='submit' onClick={handleSubmit} style={{ width: '110%', padding: '10px', marginLeft: '-23px', borderRadius: '10px', marginTop: '10px' }}>Submit Votes</button>
    </section>
  )
}
