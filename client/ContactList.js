import React from 'react'
import ContactRow from './ContactRow'

const ContactList = props => {
  const { contacts } = props

  return (
    <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      {contacts.map(contact => (
        <ContactRow
          key={contact.id}
          contact={contact} />
      ))}
    </tbody>
  </table>
  )
}

export default ContactList

