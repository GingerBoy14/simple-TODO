import { Button, ButtonGroup } from 'base-components'

const Filter = () => {
  return (
    <ButtonGroup>
      <Button type="primary">All</Button>
      <Button type="outline">Active</Button>
      <Button type="outline">Done</Button>
    </ButtonGroup>
  )
}

export default Filter
