import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGooglePopup, signInUserWithEmailAndPassword } from '../lib/firebase/firebase.utils'

import crossedEye from './../assets/icons/crossed-eye.svg'
import eye from './../assets/icons/eye.svg';
import { warn, notify } from '../App';


const defaultFormFields = {
    username: "",
    password: ""
}
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { username, password } = formFields;

    const signInWithGoogle = async () => {
        try {
            await signInWithGooglePopup();
            notify("Signed in successfully");
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    warn("Incorrect password, try again!")
                    break;
                case 'auth/user-not-found':
                    warn("User not found, check your email address!")
                    break;
                case 'auth/network-request-failed':
                    warn("Connection problem, check your network and try again!")
                    break;
                case 'auth/internal-error':
                    warn("An error has occured, try again!")
                    break;
                case 'auth/email-already-in-use':
                    warn("This email is already in use!")
                    break;
                default:
                    warn("An error has occured", error);
            }
            console.log(error)
        }
    }
        
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInUserWithEmailAndPassword(username, password)
            notify("Signed in successfully");
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    warn("Incorrect password, try again!")
                    break;
                case 'auth/user-not-found':
                    warn("User not found, check your email address!")
                    break;
                case 'auth/network-request-failed':
                    warn("Connection problem, check your network and try again!")
                    break;
                case 'auth/internal-error':
                    warn("An error has occured, try again!")
                    break;
                case 'auth/email-already-in-use':
                    warn("This email is already in use!")
                    break;
                default:
                    warn("An error has occured", error);
            }
            console.log(error);
        }
    }
    return (
        <>
            <section className="h-screen bg-footer bg-cover bg-black/50 bg-center">
                <div className="flex flex-col md:flex-row justify-start md:justify-center items-center h-screen w-full">
                    <div className="flex order-1 md:order-2 justify-center items-center w-full md:w-[45%] h-fit md:h-full pt-16">
                        <div className='w-[90%] bg-white/50 backdrop-blur-lg my-auto py-10 rounded-xl'>
                            <div className="w-full h-full overflow-y-auto">
                                <form onSubmit={handleSubmit} className="w-[90%] max-w-[600px] mx-auto">
                                    <div>
                                        <h1 className="font-Inter text-[24px] mb-5">Sign In to Adorn</h1>
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="username" className="text-lg mb-2">
                                            Username
                                        </label>
                                        <div className='border rounded-full border-gray-800'>
                                            <input
                                                className="bg-transparent outline-none border-none rounded-full py-1 px-2 w-full placeholder:text-gray-600"
                                                type="text"
                                                name="username"
                                                id="username"
                                                placeholder="Enter your username"
                                                value={username}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="password" className="text-lg mb-2">
                                            Password
                                        </label>
                                        <div className='flex border rounded-full border-gray-800 pr-2'>
                                            <input
                                                className="bg-transparent outline-none border-none rounded-full py-1 px-2 w-full placeholder:text-gray-600"
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                id="password"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span onClick={() => setShowPassword(!showPassword)} className='flex justify-center items-center cursor-pointer'>
                                                <img className='h-6' src={showPassword ? crossedEye : eye} alt="Show Password" />
                                            </span>
                                        </div>
                                    </div>
                                    <button type='submit' className="flex justify-center mt-6 mb-2 py-1 border rounded-full w-full border-gray-800 bg-black text-white hover:bg-transparent hover:text-black active:bg-black transition duration-200">
                                        Sign In
                                    </button>
                                </form>
                                <div className="max-w-[600px] mx-4 md:mx-8">
                                    <div className="flex justify-center text-tertiary">
                                        I don&apos;t have an account? <Link className='underline pl-1.5' to="/sign-up"> Sign Up</Link>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className='w-full h-[1px] bg-black'></div>
                                        <div className='flex justify-center mx-2 mb-1 mt-0.5'>or</div>
                                        <div className='w-full h-[1px] bg-black'></div>
                                    </div>
                                    <button onClick={signInWithGoogle} className="flex justify-center mt-3 py-1 border rounded-full w-full border-gray-800 bg-black text-white hover:bg-transparent hover:text-black active:bg-black transition duration-200">Sign In with Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SignIn;