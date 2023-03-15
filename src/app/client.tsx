'use client'
import { Ballot, Nominee } from '@/types'
import { useState } from 'react'

type Props={
  ballots:Ballot[]
}

export default function BallotClientPage ({ ballots }:Props) {
  const [votes, setVotes] = useState(() => new Map<Ballot['id'], Nominee>())
  function handleVote (ballotId:Ballot['id'], nominee:Nominee) {
    const draft = structuredClone(votes)
    draft.set(ballotId, nominee)
    setVotes(draft)
  }
  console.log(votes.size)
  return (
    <section>
      {/* <pre>{JSON.stringify(ballots, null, 2)}</pre> */}
      {ballots.map((ballot) => (
        <article key={ballot.id}>
          <h3 style={{ marginLeft: '-22px' }}>{ballot.id}</h3>
          <ul>
            {ballot.items.map(nominee => (
              <li key={nominee.id} style={{ border: votes.get(ballot.id)?.id === nominee.id ? '1px solid red' : 'none' }}>
                <span>{nominee.title}</span>
                <button onClick={() => handleVote(ballot.id, nominee)}>Vote</button>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}
