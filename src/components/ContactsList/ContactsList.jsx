import ContactsListItem from '../ContactsListItem/ContactsListItem'

const ContactsList = ({contacts, id,info, name}) => {
  // console.log(id)
  // console.log(info)
  return(
    <ul>

        <ContactsListItem
          info={info}
          id={id}
          name={name}
        />

      {/* {contacts.map(({id,name}) =>(
        <ContactsListItem
          info={info}
          id={id}
          name={name}
        />
      ))} */}
    </ul>
  )
}

export default ContactsList