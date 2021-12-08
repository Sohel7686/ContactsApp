import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails} = props

  const {name} = suggestionDetails

  return (
    <li className="list-container">
      <p className="para">{name}</p>
    </li>
  )
}

export default SuggestionItem
