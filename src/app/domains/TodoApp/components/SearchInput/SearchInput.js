import { Input } from 'antd'

const SearchInput = (props) => {
  const { onChange } = props
  return (
    <Input
      bordered={false}
      placeholder="Search your todo..."
      size="large"
      onChange={onChange}
    />
  )
}

export default SearchInput
