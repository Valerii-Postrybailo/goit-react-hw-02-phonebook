const ContactsListItem = ({id, name}) => {
  console.log(id)
  return(
    <li key={id}>
      <p>{name}</p>
    </li>
  )
}

export default ContactsListItem