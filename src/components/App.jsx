import React from "react";
import Section from "./Section/Section";
import ContactsList from "./ContactsList/ContactsList";
import ContactsNameForm from "./ContactsNameForm/ContactsNameForm";
import { nanoid } from 'nanoid'

const id = nanoid()

export class App extends React.Component {
  
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
    name: '',
    number: ''
  }

  handleNameChange = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
  })

  }

  handleSubmit = evt =>{
    evt.preventDefault()
    console.log(this.state)
    this.formSubmitHandler(this.state.name)
    // this.handleNameChange()
    // this.reset()
  }

  formSubmitHandler = data =>{
    // this.state.contacts.push(this.state)
    // console.log(this.state.contacts)
    // return data
    console.log(data)
    // this.setState({
    //   name: data
    // })
  }

  reset = () => { 
    this.setState({contacts:[], name: ''})
  }

  render(){
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: "column",
          fontSize: 20,
          color: '#010101'
        }}
      >
        
        <h1>Phonebook</h1>

          <Section>
            <ContactsNameForm
              value={this.state.name}
              onChange ={this.handleNameChange}
              onSubmit ={this.handleSubmit}
            />
          </Section>

          <Section title={"Contacts"}>
            <ContactsList
              contacts={this.state.contacts}
              name= {this.handleSubmit}
              info={this.state.name}
              id = {id}
            />
          </Section>
      </div>
    );
  }
};
