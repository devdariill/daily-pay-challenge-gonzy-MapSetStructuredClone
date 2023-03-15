'use client'
import { Ballot, Nominee } from '@/types'
import { useState } from 'react'

type Props={
  ballots:Ballot[]
}

export default function BallotClientPage ({ ballots }:Props) {
  const [votes, setVotes] = useState(() => new Map<Ballot['title'], Nominee>())
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
      <button type='submit' onClick={handleSubmit}>Submit Votes</button>
    </section>
  )
}
