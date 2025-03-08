import LeftNav from "./navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import swal from "sweetalert";

const Project = () => {
    let projectdata = useSelector(state => state.MyProject);
    let [projectname, setProject] = useState(projectdata.projectname);
    let [projectdetails, setDetails] = useState(projectdata.projectdetails);
    let [technology, setTechnology] = useState(projectdata.technology);
    let [liveproject, setLiveproject] = useState(projectdata.liveproject);

    let dispatch = useDispatch();
    const save = () => {
        let userinfo = {
            "projectname": projectname,
            "projectdetails": projectdetails,
            "technology": technology,
            "liveproject": liveproject
        };
        let mydata={type:"project",info:userinfo};
        dispatch(mydata);
        swal("Save Success","saved","success");
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-3 mb-4">
                    <LeftNav />
                </div>
                <div className="col-xl-6 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Project Imformation </div>
                        <div className="card-body ">
                            <form action="">

                                <div className="form-group row">

                                    <div className="mb-4">
                                        <label className="mb-2">Project Name </label>
                                        <input type="text" placeholder="Project Name" className="form-control" 
                                        onChange={obj => setProject(obj.target.value)} value={projectname}/>
                                    </div>

                                    <div className="mb-4">
                                        <label className="mb-2"> Project Details</label>
                                        <textarea placeholder="Project Details" className="form-control"
                                        onChange={obj => setDetails(obj.target.value)} value={projectdetails}></textarea>
                                    </div>

                                    <div className="mb-4">
                                        <label className="mb-2" > Technology </label>
                                        <textarea placeholder="Technology" className="form-control"
                                        onChange={obj => setTechnology(obj.target.value)} value={technology}></textarea>

                                    </div>

                                    <div className="mb-4 ">
                                        <label className="mb-2"> Live Project Url</label>
                                        <input type="text" placeholder="Url" className="form-control" 
                                        onChange={obj => setLiveproject(obj.target.value)} value={liveproject}/>

                                    </div>
                                    <div class="text-center pb-2">
                                        <button class="btn btn-danger me-3" onClick={save}> Save & Contiue </button>
                                    </div>



                                </div>

                            </form>
                        </div>

                    </div>
                </div>
                <div className="col-xl-3 mb-4"></div>
            </div>
        </div>
    )

}

export default Project;
