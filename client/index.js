import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import ContactList from './ContactList'

function Main() {
  const [contacts, setContacts] = useState([])

  function fetchData() {
    return axios.get('/api/contacts')
    .then(res => res.data)
    .catch(()=> console.log(`Couldn't fetch :(`))
  }

  useEffect(() => {
    fetchData()
    .then(res => setContacts(res))
    .catch(() => `Something's wrong in component lifecycle!`)
  }, []) // Empty array as second arg runs once, after initial render

  return (
    <div id='main'>
      <div id='navbar'>
        <div>Contact List</div>
      </div>
      <div id='container'>
        <ContactList contacts={contacts} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
