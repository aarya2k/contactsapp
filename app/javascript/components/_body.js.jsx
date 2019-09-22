class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.addNewContact = this.addNewContact.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.deleteContact = this.deleteContact.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateContact = this.updateContact.bind(this)
    }

    handleFormSubmit(name, description){
        let body = JSON.stringify({contact: {name: name, description: description} })

        fetch('http://localhost:3000/api/v1/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => {return response.json()})
            .then((contact)=>{
                this.addNewContact(contact)
            })

    }

    addNewContact(contact){
        this.setState({
            contacts: this.state.contacts.concat(contact)
        })
    }

    handleDelete(id){
        fetch(`http://localhost:3000/api/v1/contacts/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
            this.deleteContact(id)
        })
    }

    deleteContact(id){
        newContacts = this.state.contacts.filter((contact) => contact.id !== id)
        this.setState({
            contacts: newContacts
        })
    }

    handleUpdate(contact){
        fetch(`http://localhost:3000/api/v1/contacts/${contact.id}`,
            {
                method: 'PUT',
                body: JSON.stringify({contact: contact}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
            this.updateContact(contact)
        })
    }
    updateContact(contact){
        let newContacts = this.state.contacts.filter((f) => f.id !== contact.id)
        newContacts.push(contact)
        this.setState({
            contacts: newContacts
        })
    }

    componentDidMount(){
        fetch('/api/v1/contacts.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ contacts: data }) });
    }

    render(){
        return(
            <div>
                <NewContact handleFormSubmit={this.handleFormSubmit}/>
                <AllContacts contacts={this.state.contacts} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
            </div>
        )
    }
}