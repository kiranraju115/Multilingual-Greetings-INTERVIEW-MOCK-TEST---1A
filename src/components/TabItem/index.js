import './index.css'

const TabItem = props => {
  const {tabList, changeState, isActive} = props
  const {id, buttonText} = tabList

  const classElement = isActive === true ? 'activeEl' : 'notActive'

  const onClickChangeStatus = () => {
    changeState(id)
  }

  return (
    <li className="button-list ">
      <button
        className={classElement}
        type="button"
        onClick={onClickChangeStatus}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
