import {Component} from 'react'

import './index.css'

import {AiOutlineDown} from 'react-icons/ai'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    isActive: false,
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  toggleButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderIcon = () => {
    const {isActive} = this.state
    console.log(isActive)
    const isIcon = isActive ? '^' : <AiOutlineDown />
    return (
      <button className="icons" onClick={this.toggleButton} type="button">
        {isIcon}
      </button>
    )
  }

  render() {
    const {searchInput, isActive} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="container">
          <div className="inputs-container">
            <div className="cont">
              <h1>All contacts</h1>
              {this.renderIcon()}
            </div>
            {isActive && (
              <div>
                <input
                  type="search"
                  className="input-value"
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                />
              </div>
            )}
          </div>
          {isActive && (
            <div className="suggestions-container">
              <ul className="suggestion-container">
                {searchResults.map(eachSuggestion => (
                  <SuggestionItem
                    key={eachSuggestion.id}
                    suggestionDetails={eachSuggestion}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
