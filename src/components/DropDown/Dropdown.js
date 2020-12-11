import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { DropDownItem } from '../DropDownItem'

const DropDown = ({ id, status, dispatch }) => {
  return (
    <Dropdown
      overlay={DropDownItem({ id, status, dispatch })}
      placement="bottomRight"
      trigger="click">
      <DownOutlined />
    </Dropdown>
  )
}
export default DropDown
