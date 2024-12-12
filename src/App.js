import './App.css'

import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

const Item = props => {
  const {historyItem, deleteHistory} = props
  const {id} = historyItem
  const onDeleteHistory = () => {
    console.log(`delete id ${id} triggered`)
    deleteHistory(id)
  }

  return (
    <li className="item-container" key={historyItem.id}>
      <div className="item-info">
        <p className="timeAccessed">{historyItem.timeAccessed}</p>
        <img
          className="item-logo"
          src={historyItem.logoUrl}
          alt="domain logo"
        />
        <p className="title">{historyItem.title} </p>
        <p className="domainUrl">{historyItem.domainUrl} </p>
      </div>
      <div>
        <button
          id="delete"
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={onDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

class HistoryApp extends Component {
  state = {searchInput: '', histList: this.props.historyList}

  updateSerachInput = event => {
    const inputValue = event.target.value
    console.log(event.target)
    this.setState({searchInput: inputValue})
  }

  deleteHistory = value => {
    const {histList} = this.state
    const updatedHistoryList = histList.filter(
      eachItem => eachItem.id !== value,
    )
    this.setState({histList: updatedHistoryList})
    console.log(updatedHistoryList)
  }

  render() {
    const {searchInput, histList} = this.state
    const searchResult = histList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input type="search" onChange={this.updateSerachInput} />
          </div>
        </div>

        {searchResult.length === 0 ? (
          <div className="no-history-display">
            <p className="no-History-text">There is no history to show</p>
          </div>
        ) : (
          <ul className="history-container">
            {searchResult.map(eachItem => (
              <Item historyItem={eachItem} deleteHistory={this.deleteHistory} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

const App = () => <HistoryApp historyList={initialHistoryList} />

export default App
