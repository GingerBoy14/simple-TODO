import InputBase from '@material-ui/core/InputBase'

const SearchInput = (props) => {
  const { onChange } = props
  return (
    <InputBase
      placeholder="Search your todo..."
      onChange={onChange}
      fullWidth
    />
  )
}

export default SearchInput
