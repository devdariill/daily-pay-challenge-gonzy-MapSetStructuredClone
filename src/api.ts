import DATA from './mocks/data.json'
import { Ballot } from './types'

const api = {
  ballot: {
    list: async (): Promise<Ballot[]> => DATA.items as Ballot[]
  }
}

export default api
