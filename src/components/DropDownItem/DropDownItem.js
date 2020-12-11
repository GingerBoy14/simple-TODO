import { Menu } from 'antd'
import Icon from '@ant-design/icons'
import { dropDownItemButtons } from '../../utilities'

const DropDownItem = ({ id, status, dispatch }) => {
  const onClickDropDownItem = (type) => {
    dispatch({ type, payload: id })
  }
  return (
    <Menu>
      {dropDownItemButtons.map(({ textStatus, icon, type, color }) => (
        <Menu.Item
          onClick={() => onClickDropDownItem(type)}
          style={{ color: color }}
          key={textStatus}>
          <Icon component={icon} />
          {textStatus}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default DropDownItem
