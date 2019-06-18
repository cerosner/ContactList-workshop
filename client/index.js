import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ContactList from './ContactList'

function Main() {
  const [contacts, setContacts] = useState([])

  return (
    <div id='main'>
      <div id='navbar'>
        <div>Contact List</div>
      </div>
      <div id='container'>
        <ContactList contacts={contacts}/>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
