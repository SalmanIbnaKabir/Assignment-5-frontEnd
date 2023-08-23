import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


interface LoginFormInputs {
  email: string;
  password: string;
}


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();


  const handleLogin = (data: LoginFormInputs) => {
    console.log(data)
  }


  return (
    <div> <div className='h-[600px]  flex justify-center items-center'>
      <div className='w-96 px-7'>
        <h2 className='text-2xl text-center font-semibold'>Login</h2>


        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email" className="input input-bordered w-full max-w-xs" />
            {errors.email && <p className='text-red-600 text-sm pt-2'>{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input
              {...register("password",
                {
                  required: "Password required",
                }

              )}
              type="password" className="input input-bordered w-full max-w-xs" />
            {errors.password && <p className='text-red-600 text-sm pt-2'>{errors.password?.message}</p>}
            <label className="label"><span className="label-text">Forget Password ?</span></label>
          </div>

          <input type="submit" className='btn  btn-info w-full' value='Login' />
          <div>
            <p>Don't  have an account  ? <Link className='text-secondary text-sm' to='/signup'> Please SignUp</Link></p>
          </div>
        </form>

      </div>
    </div>
    </div>
  )
}
