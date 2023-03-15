## Two Params

```js
export default function BallotClientPage ({ ballots }:Props) {
  const [votes, setVotes] = useState(() => new Map<Ballot['id'], Nominee>())
  function handleVote (ballotId:Ballot['id'], nominee:Nominee) {
    console.log(ballonId,nominee)
  }
  return (
    <section>
      {/* <pre>{JSON.stringify(ballots, null, 2)}</pre> */}
      {ballots.map((ballot) => (
        <article key={ballot.id}>
          <h3 style={{ marginLeft: '-22px' }}>{ballot.id}</h3>
          <ul>
            {ballot.items.map(nominee => (
              <li key={nominee.id}>
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

```