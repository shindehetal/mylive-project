import LeftNav from "./navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Contact = () => {

    let contactdata = useSelector(state => state.MyContact);
    let [mobileno, setMobile] = useState(contactdata.mobileno);
    let [emailid, setEmail] = useState(contactdata.emailid);
    let [localadd, setLadd] = useState(contactdata.localadd);
    let [permanentadd, setPadd] = useState(contactdata.permanentadd);
    let [refrence, setRefrence] = useState(contactdata.refrence);

    let dispatch = useDispatch();
    const save = () => {
        let userinfo = {
            "mobileno": mobileno,
            "emailid": emailid,
            "localadd": localadd,
            "permanentadd": permanentadd,
            "refrence": refrence,
        };

        let mydata={type:"contact",info:userinfo};
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
                        <div className="card-header bg-info text-white"> <i class="fa fa-headset" aria-hidden="true"></i> Contact Imformation </div>
                        <div className="card-body ">
                            <form action="">

                                <div className="form-group row">

                                    <div className="mb-4">
                                        <label className="mb-2"> Mobile Number </label>
                                        <input type="number" placeholder="Mobile No" className="form-control"
                                        onChange={obj => setMobile(obj.target.value)} value={mobileno} />
                                    </div>

                                    <div className="mb-4">
                                        <label className="mb-2"> Email Id</label>
                                        <input type="email" placeholder="Example@gmail.com" className="form-control" 
                                        onChange={obj => setEmail(obj.target.value)} value={emailid}/>
                                    </div>

                                    <div className="mb-4">
                                        <label className="mb-2" > Local Address</label>
                                        <textarea placeholder="Local Address" className="form-control" rows="3" cols="3"  
                                        onChange={obj => setLadd(obj.target.value)} value={localadd}></textarea>
                                    </div>

                                    <div className="mb-4 ">
                                        <label className="mb-2"> Permanent Address</label>
                                        <textarea placeholder="Permanent Address" className="form-control" rows="3" cols="3"  
                                        onChange={obj => setPadd(obj.target.value)} value={permanentadd}></textarea>

                                    </div>

                                    <div className="mb-4 ">
                                        <label className="mb-2"> Any Refrence Address and Contact</label>
                                        <textarea placeholder="Other Contact" className="form-control" rows="3" cols="3"  
                                        onChange={obj => setRefrence(obj.target.value)} value={refrence}></textarea>

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

export default Contact;
