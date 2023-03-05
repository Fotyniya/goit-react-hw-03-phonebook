import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { Component } from "react";
import { FormContainer, FormLabel, Button } from "../ContactsForm/ContactsForm.styled"

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
      id: nanoid(),
    })
  };

  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault();
    this.props.onSubmit (this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  render () {
    return (
      <FormContainer>
        <form onSubmit={ this.handleSubmit }>
          <FormLabel>
            Name
            <input 
            type="text" 
            name='name' 
            value={this.state.name} 
            onChange = {this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
          </FormLabel>
          <FormLabel>
            Number
            <input 
              type="tel" 
              name='number' 
              value={this.state.number} 
              onChange = {this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required/>
          </FormLabel>
          <Button type="submit">Add contact</Button>
        </form>
      </FormContainer>
      
    )
  }
}
 
ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}