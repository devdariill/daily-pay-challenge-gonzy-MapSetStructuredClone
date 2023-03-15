import api from '@/api'
import BallotClientPage from './client'

export default async function Home () {
  const ballots = await api.ballot.list()
  return (
    <main style={{ display: 'grid', placeContent: 'center' }}>
      <BallotClientPage ballots={ballots} />
    </main>
  )
}
