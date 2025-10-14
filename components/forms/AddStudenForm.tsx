import React, { startTransition, useActionState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { createStudent } from '@/lib/actions';
import { childSchema } from '@/lib/validationSchemas';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const AddStudentForm = () => {

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
      <div className='flex flex-wrap gap-3'>
        
        <div className='flex flex-col'>
          <label className="text-sm text-gray-500 font-bold p-0.5">First Name</label>
          <input className="border-1 rounded-md" type="text" {...register("firstName")} />
          {errors.firstName?.message && <p className='text-xs p-1 text-red-500'>{errors.firstName?.message}</p>}
          {state.error && <span className='text-red-500'>Something went wrong!</span>}
        </div>

        <div className='flex flex-col'>
          <label className="text-sm text-gray-500 font-bold p-0.5">First Name</label>
          <input className="border-1 rounded-md" type="text" {...register("firstName")} />
          {errors.firstName?.message && <p className='text-xs p-1 text-red-500'>{errors.firstName?.message}</p>}
          {state.error && <span className='text-red-500'>Something went wrong!</span>}
        </div>

        <div className='flex flex-col'>
          <label className="text-sm text-gray-500 font-bold p-0.5">First Name</label>
          <input className="border-1 rounded-md" type="text" {...register("firstName")} />
          {errors.firstName?.message && <p className='text-xs p-1 text-red-500'>{errors.firstName?.message}</p>}
          {state.error && <span className='text-red-500'>Something went wrong!</span>}
        </div>

        <div className='flex flex-col'>
          <label className="text-sm text-gray-500 font-bold p-0.5">First Name</label>
          <input className="border-1 rounded-md" type="text" {...register("firstName")} />
          {errors.firstName?.message && <p className='text-xs p-1 text-red-500'>{errors.firstName?.message}</p>}
          {state.error && <span className='text-red-500'>Something went wrong!</span>}
        </div>

      </div>
      {/* Form Submit */}
      <button className='w-max font-bold text-white rounded-xl self-center p-2 bg-sky-400'>Create</button>
    </form>
  )
};

export default AddStudentForm

