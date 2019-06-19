import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import ContactList from './ContactList'
import SingleContact from './SingleContact'

function Main() {
  // States
  const [contacts, setContacts] = useState([])
  const [selectedContact, setContact] = useState(null)

  // Lifecycle
  useEffect(() => {
    fetchData()
    .then(res => setContacts(res))
    .catch(() => `Something's wrong in component lifecycle!`)
  }, []) // Empty array as second arg runs once, after initial render

  // Async utility functions
  function fetchData() {
    return axios.get('/api/contacts')
    .then(res => res.data)
    .catch(()=> console.log(`Couldn't fetch :(`))
  }

  function selectContact(contactId) {
    return axios.get(`/api/contacts/${contactId}`)
    .then(res => setContact(res.data))
    .catch(() => console.log(`Couldn't fetch :(`))
  }

  return (
    <div id='main'>
      <div id='navbar'>
        <div>Contact List</div>
      </div>
      <div id='container'>
        <ContactList
          contacts={contacts}
          selectContact={selectContact}
        />
      </div>
      { selectedContact ?
      <div>
        <SingleContact contact={selectedContact} />
      </div> : null }
    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
