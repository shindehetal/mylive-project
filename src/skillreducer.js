const MySkilll = (state, action) =>{

    let data = {
        "skill": ""
    };

    let skillData= Object.assign(data, state);
    if(action.type==="skill"){
        skillData = action.info;
    }

    return skillData;
    
}

export default MySkilll;