const AllContacts = (props) => {

    var contacts = props.contacts.map((contact) => {
        return(
            <div key={contact.id}>
                <Contact contact={contact} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
            </div>
        )
    })

    return(
        <div>
            {contacts}
        </div>
    )
}