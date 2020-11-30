import { useStoreContext } from 'app/context'
import { Input } from 'base-components'

const Search = () => {
  const { dispatch } = useStoreContext()
  return (
    <Input
      placeholder="Type todos..."
      onChange={(e) => dispatch({ type: 'SEARCH', payload: e.target.value })}
    />
  )
}

export default Search
