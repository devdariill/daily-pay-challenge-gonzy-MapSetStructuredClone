import api from '@/api'

export default async function Home () {
  const ballots = await api.ballot.list()
  return (
    <main><pre>{JSON.stringify(ballots, null, 2)}</pre></main>
  )
}
