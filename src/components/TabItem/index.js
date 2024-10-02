import './index.css'

const TabItem = props => {
  const {details, onClickedName, isActive} = props
  const {displayText, tabId} = details

  const onclickBtn = () => {
    onClickedName(tabId)
  }

  const activeClass = isActive ? 'active-tab' : ''

  return (
    <li className={`tab-item ${activeClass}`}>
      <button type="button" onClick={onclickBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
