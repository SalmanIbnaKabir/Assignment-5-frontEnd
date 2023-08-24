import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useSignupMutation } from "../redux/features/user/userApi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';





interface SignupFormInputs {
  name: string;
  email: string;
  password: string;

}

export default function Signup() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SignupFormInputs>();

  const navigate = useNavigate()

  const [signup, { isLoading, }
  ] = useSignupMutation()
  // console.log(isLoading)
  // console.log(isError)
  // console.log(isSuccess)

  const handleSignup = (data: SignupFormInputs) => {
    // console.log()
    signup(data).unwrap()
      .then((payload) => {
        toast.success(payload.message);
        reset()
        navigate('/login')
        // console.log(payload)
      })
      .catch((error) => {
        toast.error(error.data.message)
        reset()
        // console.log(error)
      })



  }
  return (
    <div>
      <div className='h-[700px]  flex justify-center items-center'>
        <div className='w-96 px-7'>
          <h2 className='text-2xl text-center font-semibold'>Sign Up</h2>


          <form onSubmit={handleSubmit(handleSignup)} >
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Name</span></label>
              <input
                {...register("name",
                  { required: "Name is required" }
                )}
                type="text" className="input input-bordered w-full max-w-xs" />
              {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Email</span></label>
              <input
                {...register("email",
                  { required: 'Email is required' }
                )}
                type="email" className="input input-bordered w-full max-w-xs" />
              {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
            </div>





            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Password</span></label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: 'Password must be 6 characters long' },

                }
                )}
                type="password" className="input input-bordered w-full max-w-xs" />
              {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

            </div>




            <input type="submit" disabled={isLoading} className='btn btn-info w-full mt-5' value='sign up' />

          </form>
          <p>Already have an account  ? <Link className='text-secondary text-sm' to='/login'> Please Login</Link></p>



          <Toaster />





        </div>

      </div>

    </div>
  )
}
