const MyContact = (state, action) =>{

    let data = {
        "mobileno": "",
        "emailid": "",
        "localadd": "",
        "permanentadd": "",
        "refrence": "",
    };

    let contactData= Object.assign(data, state);
    if(action.type==="contact"){
        contactData = action.info;
    }

    return contactData;
    
}

export default MyContact;