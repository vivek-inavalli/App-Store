import './index.css'
const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="small-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
