import LeftNav from "./navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Skill = () => {
    let skilldata = useSelector(state => state.MySkilll);
    let [skill, setSkill] = useState(skilldata.skill);

    let dispatch = useDispatch();
    const save = () => {
        let userinfo = {
            "skill": skill
        };
        let mydata = { type: "skill", info: userinfo };
        dispatch(mydata);
        alert("saved");
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-3 mb-4">
                    <LeftNav />
                </div>
                <div className="col-xl-6 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Skill Imformation </div>
                        <div className="card-body ">
                            <form action="">

                                <div className="form-group row"><div className="mb-4 ">
                                    <label className="mb-2"> Skill</label>
                                    <textarea placeholder="Enter Skill" className="form-control"
                                        onChange={obj => setSkill(obj.target.value)} value={skill}></textarea>
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

export default Skill;
