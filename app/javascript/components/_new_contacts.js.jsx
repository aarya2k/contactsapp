const NewContact = (props) => {

    let formFields = {}

    return(
        <div>
            <input ref={input => formFields.name = input} placeholder='Enter the name of the person'/>
            <input ref={input => formFields.telephone = input} placeholder='Enter the telephone number' />
            <input ref={input => formFields.address = input} placeholder='Enter a address' />
            <button onClick={ () => props.handleFormSubmit(formFields.name.value, formFields.telephone.value, formFields.address.value)}>Submit</button>
        </div>
    )
}