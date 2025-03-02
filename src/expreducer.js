const MyExperience = (state, action) => {

    let data = {
        "totalexp": "",
        "aboutexp": ""
    };

    let expData = Object.assign(data, state);
    if (action.type === "experience") {
        expData = action.info;
    }

    return expData;

}

export default MyExperience;