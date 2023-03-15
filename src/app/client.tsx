'use client'
import { Ballot, Nominee } from '@/types'
import { useState } from 'react'

type Props={
  ballots:Ballot[]
}

export default function BallotClientPage ({ ballots }:Props) {
  const [votes, setVotes] = useState(() => new Map<Ballot['id'], Nominee>())
  return (
    <section>
      {/* <pre>{JSON.stringify(ballots, null, 2)}</pre> */}
      {ballots.map((ballot) => (
        <article key={ballot.id}>
          <h3 style={{ marginLeft: '-22px' }}>{ballot.id}</h3>
          <ul>
            {ballot.items.map(nominee => (
              <li key={nominee.id}>{nominee.title}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}
