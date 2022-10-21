import React from "react";
import Section from "./Section/Section";
import ContactsList from "./ContactsList/ContactsList";
import ContactsNameForm from "./ContactsNameForm/ContactsNameForm";
import { nanoid } from 'nanoid'

const id = nanoid()

export class App extends React.Component {
  
  state = {
    contacts: [],
    name: ''
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
            <ContactsNameForm/>
          </Section>

          <Section title={"Contacts"}>
            <ContactsList
              id = {id}
            />
          </Section>
  
      </div>
    );
  }
  
};
