import api from '@/api'

export default async function Home () {
  const ballots = await api.ballot.list()
  return (
    <main className='container mx-auto mt-10'>
      {/* <pre>{JSON.stringify(ballots, null, 2)}</pre> */}
      {ballots.map((ballot) => (
        <section key={ballot.id}>
          <h3 className='font-bold text-3xl'>{ballot.id}</h3>
          <ul>
            {ballot.items.map(nominee => (
              <li key={nominee.id}>{nominee.title}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}
