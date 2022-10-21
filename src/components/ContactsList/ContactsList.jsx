import ContactsListItem from '../ContactsListItem/ContactsListItem'

const ContactsList = ({x, id}) => {
  console.log(id)

  return(
    <ul>
      <ContactsListItem
          id={id}
        />
      {/* {x.map(({}) =>(
        <ContactsListItem
          id={id}
        />
        
      ))} */}
    </ul>
  )
}

export default ContactsList