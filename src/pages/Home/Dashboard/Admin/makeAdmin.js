import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import useAuth from '../../../../Hooks/useAuth';


const MakeAdmin = () => {
  
    const { token } = useAuth();
    const { register, handleSubmit, reset } = useForm();

const onSubmit = data => {
    // const user = {data.email}
    fetch('https://enigmatic-savannah-10349.herokuapp.com/admin', {
        method: 'PUT',
        headers: {
            // 'authorization': `Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
        if (data.modifiedCount) {
            Swal.fire(
                `Congratulations!`,
                'Successfully Login!',
                'success'
            )
        }
        reset()
    })
};

 
    return (
        <div>
                    <form className="w-2/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
     
                <input
                    className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-700"
                    type="email" placeholder="Email"
                    {...register("email",
                        )} />
                
                
                <input
                    className=" cursor-pointer block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 bg-emerald-800 text-lg text-teal-50"
                    type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;