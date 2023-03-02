import { Component } from 'react'
import { nanoid } from 'nanoid'
import {Container} from './App.styled'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleChange = e => {
    const {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  addContact = newContact => {
    this.setState(prevState => {
      const { contacts } = prevState
      const {name, number} = newContact

      if(contacts.some(
          oldContact => oldContact.name === name
        )) {
        return alert(`${name} is already in contacts.`)
      }

      return {
        contacts: [...contacts, {
          name,
          number,
          id: nanoid()
        }]
      }
    })
  }

  deleteContact = contactId => {
    this.setState(prevState => (
      {
        contacts: prevState.contacts.filter(({id}) => id !== contactId)
      })
    )
  }

  render() {
    const { handleChange, addContact, deleteContact } = this
    const {contacts, filter} = this.state
    const visibleContacts = contacts.filter(
      contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} handleChange={handleChange} />
        <ContactList visibleContacts={visibleContacts} handleDelete={ deleteContact} />
      </Container>
    );
  }
}

export default App;