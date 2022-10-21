const ContactsListItem = ({id, name,info}) => {
  console.log()
  return(
    <li key={id}>
      <p>{info}</p>
    </li>
  )
}

export default ContactsListItem