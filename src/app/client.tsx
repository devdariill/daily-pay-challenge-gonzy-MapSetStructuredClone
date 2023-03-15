/* eslint-disable @next/next/no-img-element */
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
    <section style={{
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '40px'
    }}
    >
      {/* <pre>{JSON.stringify(ballots, null, 2)}</pre> */}
      {ballots.map((ballot) => (
        <article
          key={ballot.title} style={{
            alignSelf: 'stretch'
          }}
        >
          <h3 style={{ marginLeft: '-22px' }}>{ballot.title}</h3>
          <ul style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '20px'
          }}
          >
            {ballot.items.map(nominee => (
              <li
                key={nominee.id}
                style={{
                  border: votes.get(ballot.title)?.id === nominee.id ? '2px solid gold' : 'none',
                  backgroundColor: 'gray',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'black',
                  borderRadius: '10px',
                  gap: '20px'
                }}
              >
                <span style={{ textAlign: 'center' }}>{nominee.title}</span>
                <img
                  src={nominee.photoUrL}
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: 96,
                    border: '2px solid black',
                    padding: '2px',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  alt={nominee.title}
                />
                <button style={{ width: '100%', padding: '6px 0' }} onClick={() => handleVote(ballot.title, nominee)}>Vote</button>
              </li>
            ))}
          </ul>
        </article>
      ))}
      <button disabled={!isComplete} type='submit' onClick={handleSubmit} style={{ width: '105%', padding: '10px', marginLeft: '-23px', borderRadius: '10px', marginTop: '10px' }}>Submit Votes</button>
    </section>

  )
}
