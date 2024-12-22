import Reac,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const[email,setEmail]=useState('')
  const[first_name, setFirstName]=useState('')
  const[last_name, setLastName] = useState('')
  const[username, setUsername] = useState('')
  const[dob,setDob] = useState('')
  const[password, setPassword] = useState('')
  const[cpassword,setCpassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    if(password !== cpassword){
      toast.error("password did not matched !")
    }

    try{
      const response = await axios.post(`http://localhost:8000/register/`, {
        email,
        first_name,
        last_name,
        username,
        dob,
        password
      })

      if(response.status === 201){
        toast.success('User registered successfully !')
        setTimeout(()=>{
          navigate('/login') 
        }, 4000)
      }else{
        toast.error('Registration failed. Please try again !')
      }
    }catch(err){
      toast.error(`Registration failed: ${err} `)
    }
  }
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>

    <section className="bg-gray-50 dark:bg-gray-900" >
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-10">
        <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
            Flowbite    
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label for="fname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your first name</label>
                        <input type="text"
                          value={first_name}
                          onChange={(e)=>setFirstName(e.target.value)}
                        name="fname" id="fname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your first name" required=""/>
                    </div>
                    <div>
                        <label for="lname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                        <input type="text"
                          value={last_name}
                          onChange={(e)=>setLastName(e.target.value)}
                        name="lname" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your last name" required=""/>
                    </div>
                    <div>
                        <label for="uname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                        <input type="text" 
                          value={username}
                          onChange={(e)=>setUsername(e.target.value)}
                        name="uname" id="uname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your username" required=""/>
                    </div>
                    <div>
                        <label for="fname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your date of birth</label>
                        <input type="date"
                          value={dob}
                          onChange={(e)=>setDob(e.target.value)}
                        name="fname" id="fname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" 
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                        name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div>
                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" 
                          value={cpassword}
                          onChange={(e)=>setCpassword(e.target.value)}
                        name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                        </div>
                        <div className="ml-3 text-sm">
                          <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="#">Terms and Conditions</Link></label>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
    </>
  )
}

export default Register