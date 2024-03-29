import { useContext, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { CiLock, CiUnlock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { ImgUpload } from "../../API/ImgUpload/ImgUpload";
import { AuthContext } from "../../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { axiosSecure } from "../../API/AxiosSecure/AxiosSecure";
import toast from "react-hot-toast";


const Signup = () => {
    const [isPassView, setIsPassView] = useState(false)
    const { createUser } = useContext(AuthContext)

    const handleSignUp = async (e) => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.files[0]

        const image = await ImgUpload(photo)
        const userImage = image?.data?.display_url

        console.log(userImage)

        createUser(email, password)
            .then(result => {
                const userInfo = result.user
                console.log(userInfo)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image?.data?.display_url

                })

                const user = { name, email, password, userImage }

                axiosSecure.post("/users", user)
                    .then(response => {
                        console.log('User added successfully:', response.data);

                        if (response?.data?.acknowledged === true) {
                            toast('User added successfully')
                        }
                    })
                    .catch(error => {
                        console.error('Error adding user:', error);
                        toast('Error when adding user')
                    });

            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <div className="w-full min-h-[100vh] flex justify-center items-center">
            <div className="2xl:w-1/3 xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-2/5 min-h-fit bg-white shadow-md rounded-md md:px-12 md:py-14 p-2 sm:border-2">
                <h1 className="text-center font-bold">Sign Up</h1>
                <p className="text-center mt-4 mb-6 font-thin">Please sign up for access your account</p>
                <form onSubmit={handleSignUp} action="" className="m-2 space-y-4">
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="email">Your name</label>
                        <div className="inputField inline-flex items-center relative">
                            <input type="text" name="name" id="name" placeholder="type your name" />
                            <div className="absolute right-2">
                                <FaRegUser size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="email">Your photo</label>
                        <div className="inputField inline-flex items-center relative">
                            <input type="file" name="photo" id="photo" placeholder="" accept="image/jpg, image/png" />
                            <div className="absolute right-2">
                                <AiOutlineCamera size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <label htmlFor="email">Email address</label>
                        <div className="inputField inline-flex items-center relative">
                            <input type="email" name="email" id="email" placeholder="type your email" />
                            <div className="absolute right-2">
                                <MdOutlineMail size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="inputField flex flex-col space-y-4">
                        <label htmlFor="email">Password</label>
                        <div className="inline-flex items-center relative">
                            <input type={isPassView ? "text" : "password"} name="password" id="password" autoComplete="off" placeholder="type password" />
                            <div onClick={() => setIsPassView(!isPassView)} className="absolute right-2">
                                {isPassView ? <CiUnlock size={20} /> : <CiLock size={20} />}
                            </div>
                        </div>
                    </div>
                    <div className="w-full btn1">
                        <button type="submit">Continue</button>
                        <p className="text-xs md:text-sm mt-1">{`Don't have an account?`}<Link to={"/login"}> <span className="text-[#646cff] font-bold">Sign in</span></Link></p>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Signup;