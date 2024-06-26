import React, { useReducer } from 'react'
import { useForm } from 'react-hook-form';
const Billing = () => {
    const [event, updateEvent] = useReducer((prev, next) => {
        return { ...prev, ...next }
      }, { companyName: '', registrationDetails: '', streetName :'',city:"",state:'',zipcode:''})
      const { register, handleSubmit, formState: { errors } } = useForm();

      const submitForm = () =>{
        console.log("Sending Data✔️1")
        console.log(event)
      }
  return (
    <div className="p-5 w-[30%] bg-white rounded-lg">
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <h1 className="text-xl font-bold ">Billing Information</h1>
            <p className="text-md ">This information is used when processing payments.Safe money transfer using your bank account</p>
        </div>
        <div className="mt-5 flex justify-evenly shrink-0">
            <div>
            <label >Company Name</label>
            <input className="w-32 h-7 border outline-none" onChange={(e)=>updateEvent({companyName:e.target.value})} type="text" {...register('companyname',{ required: true, maxLength: 20 })} name="company name"/>
            {errors.companyname && <p className="text-xs text-red-700">Please check the Company Name</p>}
            </div>
            <div>
            <label >Registration Details</label>
            <input className="ml-5 w-32 border h-7 outline-none" onChange={(e)=>updateEvent({registrationDetails:e.target.value})}  type="text" {...register('registrationDetails',{ required: true, maxLength: 10 })}  name="registration details"/>
            {errors.registrationDetails && <p className="text-xs text-red-700">Please check the registration </p>}
            </div>
        </div>
        <div className="mt-5 ">
            <label >Street Name</label>
            <input className="w-full h-7 border outline-none" onChange={(e)=>updateEvent({streetName:e.target.value})}  type="text" {...register('streetName',{ required: true, maxLength: 20 })} name="Street name"/>
            {errors.streetName && <p className="text-xs text-red-700">Please check the streetName</p>}
        </div>
        <div className="mt-5  flex justify-evenly">
        <div>
            <label >City</label>
            <input className="w-20 h-7 border outline-none" onChange={(e)=>updateEvent({city:e.target.value})}  type="text" {...register('city',{ required: true, maxLength: 10 })} name="city"/>
            {errors.city && <p className="text-xs text-red-700">Please check the city Name</p>}
        </div>
        <div>
            <label >State</label>
            <input className="ml-5 w-20 border h-7 outline-none" onChange={(e)=>updateEvent({state:e.target.value})}  type="text" {...register('state',{ required: true, maxLength: 10 })} name="State"/>
            {errors.state && <p className="text-xs text-red-700">Please check the state Name</p>}
        </div>
        <div>
            <label >Zipcode</label>
            <input className="ml-5 w-20 h-7 border outline-none" onChange={(e)=>updateEvent({zipcode:e.target.value})}  type="text" {...register('zipcode',{ required: true, maxLength: 8 })} name="zipcode"/>
            {errors.zipcode && <p className="text-xs text-red-700">Please check the zipcode</p>}
        </div>
        </div>
        <div className="mt-5"><button className="w-full h-10 bg-blue-800 text-white hover:bg-blue-600 transition-colors">Save</button></div>
        </form>
    </div>
  )
}

export default Billing
