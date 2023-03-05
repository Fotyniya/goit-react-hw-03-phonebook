import { Component } from "react";
import { nanoid } from "nanoid";
import { Layout } from "components/Layout";
import { GlobalStyle } from "components/GlobalStyle";
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { ContactsList } from "./Contacts/ContactsList";
import { Filter } from "./Filter/Filter";

const INITIAL_STATE = {
  contacts: [],
  filter: ''
};

export class App extends Component {
  state = { ...INITIAL_STATE };

addContact = data => {
  console.log(data)
 for (const contact of this.state.contacts){
  if (contact.name === data.name) {
    alert (`${data.name} is already in contacts`); 
    return;
  }
 }
  this.setState ( prevState => {
    return {
      contacts: [...prevState.contacts, {name: data.name, number: data.number, id: nanoid()}],
    }
  })
}

deleteContact = (contactId) => {
  this.setState (prevState => {
  return {
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }
})};

componentDidMount(){
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null){
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({contacts: parsedContacts});
      return;
    };
    this.setState({contacts: INITIAL_STATE.contacts})
};

componentDidUpdate(prevProps, prevState){
  if (prevState.contacts !== this.state.contacts){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
};

changeFilter = (event) => {
  this.setState({filter: event.currentTarget.value});
};

render(){
  const filtredContacts = 
    this.state.contacts
    .filter(contact => contact.name.includes(this.state.filter));

  return(
    <Layout> 
      <h1>Phonebook</h1>
      <ContactsForm onSubmit = {this.addContact} />
      <h2>Contacts</h2>
      <Filter filter={this.state.filter} onChange={this.changeFilter}/>
      <ContactsList contactsList = {filtredContacts} onDelete = {this.deleteContact} />
    <GlobalStyle/>
    </Layout>
  )};
};