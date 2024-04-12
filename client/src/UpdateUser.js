import React, { useEffect ,useState} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import axios from "axios"
const UpdateUser = () => {
    const {id} =useParams()
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[age,setAge] = useState();
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3000/getUser/'+id)
        .then(result=>{console.log(result)
            setName(result.data.name);
            setEmail(result.data.email);
            setAge(result.data.age)
            navigate("/");
        }
        )
        
        .catch(err=>console.log(err))
    }, [])
  return (
    <div>
         <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form>
                    <h2>Update User</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type="text" placeholder='enter name' className='form-control' value={name}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type="email" placeholder='enter Email' className='form-control' value={email}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Age</label>
                        <input type="text" placeholder='enter age' className='form-control' value={age}></input>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
            
            </div>
    </div>
  )
}

export default UpdateUser