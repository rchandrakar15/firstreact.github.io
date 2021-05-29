import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState ({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    })

    const InputEvent = (event) =>{

        const {name,value} = event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        });
    };

    const SubmitForm = (event) => {
        event.preventDefault();
        alert(`Fullname: ${data.fullname}, Phone number: ${data.phone}, Email: ${data.email}, Message: ${data.msg}`);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row-cols-2">
                    <div className="col-6">
                        <form onSubmit={SubmitForm} >
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Fullname</label>
                                <input  type="text"
                                        name="fullname"
                                        value={data.fullname}
                                        onChange={InputEvent}
                                        className="form-control" 
                                        id="exampleFormControlInput1" 
                                        placeholder="Fullname" 
                                        />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input  type="number" 
                                        name="phone"
                                        value={data.phone}
                                        onChange={InputEvent}
                                        className="form-control" 
                                        id="exampleFormControlInput1" 
                                        placeholder="Enter mobile no" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input  type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent}
                                        className="form-control" 
                                        id="exampleFormControlInput1" 
                                        placeholder="Enter email" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea                                 

                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}

                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"></textarea>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;