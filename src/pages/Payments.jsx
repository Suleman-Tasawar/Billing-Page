import React,{useState} from 'react'
import { useForm } from 'react-hook-form';

const Payments = () => {
    const [payments,setPayment]= useState({isCard:true,cardNum:"",cardYear:"",cardName:"",cardCVC:"",payPall:false})
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const submitPayment = () =>{
        console.log("Sending Data✔️2")
      }

  return (

     <div className="p-5 bg-white w-[30%] rounded-lg">
        <form onSubmit={handleSubmit(submitPayment)}>
          <div>
              <h1 className="text-xl font-bold ">Payment Information Information</h1>
              <p className="text-md ">Safe money transfer using your bank account.Visa Manestro
                ,American Express powered by stripe we dont store card information on our severs</p>
            </div>
            <div className="mt-5 border-blue-600">
              <input type="radio" onChange = {(e)=>setPayment({...payments,isCard:e.target.value})} name="credit card" {...register('card')} />
              <label >Credit Card</label>
            </div>
            <div className="mt-5 flex justify-evenly shrink-0">
            <div>
              <label >Card Number</label>
              <input className="w-32 h-7 border outline-none" onChange = {(e)=>setPayment({...payments,cardNum:e.target.value})}  type="text" {...register('card number',{ required: true, maxLength: 16 })} name="company name"/>
              {errors.cardNum && <p className="text-xs text-red-700">Please check the Card Number</p>}
            </div>
            <div>
              <label >Card Year</label>
              <input className="ml-5 w-16 border h-7 outline-none" onChange = {(e)=>setPayment({...payments,cardYear:e.target.value})}   type="text" {...register('card year',{ required: true, maxLength: 5 })} name="registration details"/>
              {errors.cardYear && <p className="text-xs text-red-700">Please check the card year</p>}
            </div>
          </div>
          <div className="mt-5 flex justify-evenly shrink-0">
            <div>
              <label >Name of Card Holder</label>
              <input className="w-32 h-7 border outline-none" onChange = {(e)=>setPayment({...payments,cardName:e.target.value})}   type="text" {...register('card holder name',{ required: true, maxLength: 15 })} name="company name"/>
              {errors.cardName && <p className="text-xs text-red-700">Please check the Card Name</p>}
            </div>
            <div>
              <label >CVC</label>
              <input className="ml-5 w-16 border h-7 outline-none" onChange = {(e)=>setPayment({...payments,cardCVC:e.target.value})}   type="text" {...register('card cvc',{ required: true, maxLength: 4 })} name="registration details"/>
              {errors.cardCVC && <p className="text-xs text-red-700">Please check the cvc</p>}
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center border-blue-600">
              <div>
                <input type="radio" name="credit card" {...register('paypall')} onChange = {(e)=>setPayment({...payments,payPall:e.target.value})}  />
                <label >Paypall</label>
              </div>
              <div><img className="w-10 h-10" src="./paypal-logo-svgrepo-com.svg" alt="paypall" /></div>
            </div>
            <div className="mt-5"><button  className="w-full h-10 bg-blue-800 text-white hover:bg-blue-600 transition-colors">Save</button></div>
        </form>

      </div>
  )
}

export default Payments
