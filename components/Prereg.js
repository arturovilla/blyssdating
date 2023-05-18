import { useFormik } from 'formik'

function Prereg() {

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            city: ""
        },
        //Validate form up here with yup if neccesary
        
        //submit form
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <div className="">
            <div className="flex justify-center bg-red-400">
                <h1 className="text-5xl font-semibold text-[#B2B3EB]">Register for Blyss!</h1>
            </div>
            {/* this is the start of the form */}
            <div>
                <form>
                    <div className='bg-blue-300 flex justify-center'>
                        <div>
                            <label className="block text-sm pt-2" htmlFor='firstname'>Firstname</label>
                            <input type='text' name='firstname' value=""/>
                        </div>
                        <div>
                            <label className="block text-sm pt-2" htmlFor='lastname'>Lastname</label>
                            <input type='text' name='lastname' value=""/>
                        </div>

                    </div>
                    <div className='bg-blue-600 flex justify-center'>
                        <div>
                            <label className="block text-sm pt-2" htmlFor='email'>Email</label>
                            <input type='text' name='email' value=""/>
                        </div>
                        <div>
                            <label className="block text-sm pt-2" htmlFor='phonenumber'>Phone Number</label>
                            <input type='text' name='phonenumber' value=""/>
                        </div>

                    </div>
                    <div className='bg-blue-900 flex justify-center'>
                        <button type='submit' className='bg-blue-600 text-sm text-white py-3 my-2 rounded-lg px-4'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Prereg