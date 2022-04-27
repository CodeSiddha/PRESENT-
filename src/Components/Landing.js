// import Background from '/Images/attendance.png'
export default function Landing(){
    return(
        <div className=" Landing bg-cyan-900" >
            <div className="px-4 justify-between flex flex-wrap items-center border-red-600 ">
                <div className=" w-50">
                    <img src={"/Images/attendance.png"} alt="students" style={{ backgroundSize: "cover",
                        backgroundAttachment: "fixed"}} className=" w-50 h-screen w-full"/>
                </div>
                    {/* <div className='flex justify-center my-auto flex-col text-white space-y-10 w-2/3 '>
                        <p className='text-4xl font-bold w-96'>
                        <span className=" m-3 before:block  before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#1864a0] relative inline-block">
                                <span className="relative text-white">Easy Attendance</span>
                            </span>
                        </p>

                        <p className='text-lg text-gray-400 font-semibold'>Easy Attendance enables school administrators to record, manage & compile daily student attendance data. Along with student attendance, this software also allows teachers to generate 100% accurate student attendance reports.</p>
                    </div> */}
                    <div className="bg-[rgb(28,29,35)] shadow-lg hover:shadow-indigo-500/50
                        lg:w-2/6 md:w-1/3  rounded-lg p-8 flex flex-col md:ml-auto w-full  md:mt-0 mx-auto  ">
                            <h2 className="text-white text-lg font-medium title-font mb-5">Login</h2>
                            <div className="relative mb-4 ">
                                {/* <label for="Username"  className="leading-7 text-sm text-white">*Username</label> */}
                                <input type="text"  id="Email" name="Username" placeholder='Email' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relativemt mt-3 mb-4">
                                {/* <label for="Password" className="leading-7 text-sm text-white">*Password</label> */}
                                <input type="password"  id="Password" name="Password" placeholder='Password' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="radio flex">
                                <div className="relativemt mt-1 mb-4">
                                    <label for="Radio" className="leading-7 text-sm text-white font-bold">Admin</label>
                                    <input type="radio"  id="Radio" name="Radio" placeholder='Admin' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relativemt mt-1 mb-4 pl-3">
                                    <label for="Radio" className="leading-7 text-sm text-white font-bold ">Teacher</label>
                                    <input type="radio"  id="Radio" name="Radio" placeholder='Admin' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <button  className="mt-1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                            <p> 
                                <a href="/"className="text-xs text-blue-100 mt-3" >Forgot Password?</a> 
                                {/* <a href="/"></a>  */}
                            </p>
                            <p className="text-xs text-gray-400 ">*All Fields Are Mandatory | WELCOME.</p>
                    </div>
            </div>
        </div>
    )
}