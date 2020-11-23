import './style.scss'
import Dropdown from '../DropDown/Dropdown'

const App = () => {
  return (
    <div className="row h-100 justify-content-center">
      <div className="col-4">
        <Dropdown>
          <li className="menu-item-read">Read TODO</li>
          <li className="menu-item-pin">Pin to top</li>
          <li className="menu-item-important">Make important</li>
          <li className="menu-item-delete">Delete</li>
        </Dropdown>
      </div>
    </div>
  )
}

export default App
