const MyProject = (state, action) => {

    let data = {
        "projectname": "",
        "projectdetails": "",
        "technology": "",
        "liveproject": ""
    };

    let projectData = Object.assign(data, state);
    if (action.type === "project") {
        projectData = action.info;
    }

    return projectData;

}

export default MyProject;