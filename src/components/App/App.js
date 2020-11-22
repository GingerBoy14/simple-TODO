import './style.scss'
import Dropdown from '../DropDown/Dropdown'

const App = () => {
  return (
    <div className="row h-100 justify-content-center">
      <div className="col-4">
        <h2>Todo list</h2>
        <Dropdown />
      </div>
    </div>
  )
}

export default App
