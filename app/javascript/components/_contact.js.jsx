class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            editable: false
        }
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(){
        if(this.state.editable){
            let name = this.name.value
            let telephone = this.telephone.value
            let address = this.address.value
            let id = this.props.contact.id
            let contact = {id: id, name: name, telephone: telephone, address: address }
            this.props.handleUpdate(contact)
        }
        this.setState({
            editable: !this.state.editable
        })
    }

    render(){
        let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.contact.name}/>:<h3>{this.props.contact.name}</h3>
        let telephone = this.state.editable ? <input type='text' ref={input => this.telephone = input} defaultValue={this.props.contact.telephone}/>:<p>{this.props.contact.telephone}</p>
        let address = this.state.editable ? <input type='text' ref={input => this.address = input} defaultValue={this.props.contact.address}/>:<p>{this.props.contact.address}</p>
        return(
            <div>
                {name}
                {telephone}
                {address}
                <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
                <button onClick={() => this.props.handleDelete(this.props.contact.id)}>Delete</button>
            </div>
        )
    }
}