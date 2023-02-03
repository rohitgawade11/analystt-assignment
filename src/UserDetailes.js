import React,{useState} from 'react'

export default function UserDetailes(props) {
    const {id,name,username,email,phone,address} = props.data;
    const {street,suite,city,zipcode} = address;
    const [visible,setVisible] = useState(true);
    // Note : You did not provide Designation, State, Country, Description 

    return (
        <div className="bg-light p-5 rounded my-5">
            <div className="row">
                <div className='col-xl-2 col-md-6 col-6'>
                    <p>Hello <b>{username}</b></p>
                </div>
                <div className='col-xl-3 col-md-6 col-6'>
                    <h6>CONTACT</h6>
                    <p>{name}</p>
                </div>
                <div className='col-xl-2 col-md-6 col-6'>
                    <h6>CITY</h6>
                    <p>{city}</p>
                </div>
                <div className='col-xl-3 col-md-6 col-6'>
                    <h6>STATE</h6>
                    <p>null</p>
                </div>
                <div className='col-xl-2 col-md-12 col-12'>
                    <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#hideAndShow${id}`} onClick={()=>{setVisible(!visible)}} aria-expanded="false" aria-controls={`hideAndShow${id}`}>{visible === true ? 'View Details' : 'Hide Details'}</button>
                </div>
            </div>
            <div className="collapse mt-2" id={`hideAndShow${id}`}>
                <div className="card card-body p-4">
                    <h5>Description</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid error modi nulla nemo natus aut nobis ipsam laboriosam illo reiciendis illum unde dolore, porro ab, saepe incidunt laudantium quis animi.</p>
                    <div className="row mt-3">
                        <div className="col-md-6 col-12">
                            <h6>Contact Person</h6>
                            <p>{name}</p>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6>Address</h6>
                            <p>{street}, {suite}, {city}, {zipcode}</p>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6>Designation</h6>
                            <p>null</p>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6>City</h6>
                            <p>{city}</p>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6>Emails</h6>
                            <p>{email}</p>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6>State</h6>
                            <p>null</p>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6>Phones</h6>
                            <p>{phone}</p>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6>Country</h6>
                            <p>null</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
