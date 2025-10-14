import React, { startTransition, useActionState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { createStudent } from '@/lib/actions';
import { childSchema } from '@/lib/validationSchemas';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const AddStudenForm = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: zodResolver(childSchema),
  })

  const [state, formAction] = useActionState(createStudent, { success: false, error: false })

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    startTransition(() => {
      formAction(data);
    })
  })

  const router = useRouter()

  useEffect(() => {
    if (state.success) {
      toast(`Student has been added!`);
      router.refresh();
    }
  })

  return (
    <form className='p-2 h-full flex flex-col justify-between' onSubmit={onSubmit}>
      {/* Form Header */}
      <h1 className='text-xl font-bold'>Add a New Student</h1>
      {/* Form Fields */}
      <div className='flex flex-wrap'>

        <label htmlFor="First Name">First Name</label>
        <input type="text" {...register("firstName")} />
        {errors.firstName?.message && <p>{errors.firstName?.message}</p>}
        {state.error && <span className='text-red-500'>Something went wrong!</span>}
        
      </div>
      {/* Form Submit */}
      <button className='w-max font-bold text-white rounded-xl self-center p-2 bg-sky-400'>Submit</button>
    </form>
  )
};

export default AddStudenForm

