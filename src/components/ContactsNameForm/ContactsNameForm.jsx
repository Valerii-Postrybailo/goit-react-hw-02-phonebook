const ContactsNameForm = ({value, onChange, onSubmit}) => {
  console.log(onChange)
  return(
    <div>
      <h2>Name</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={value}
            onChange={onChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
{/* 
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          /> */}
          
          <button type="submit">Add contact</button>

        </form>
    </div>
  )
}

export default ContactsNameForm