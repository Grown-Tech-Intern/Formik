import React from 'react';
import x from '../../assets/x_circle.svg'
import gg from '../../assets/logo_google.svg'
import fb from '../../assets/logo_fb.svg'
import '././style.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup'

function Register() {
    const formik = useFormik({
        initialValues:{
            email: "",
        },
        
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email.').required('Please enter the email')
        }),

        onSubmit: (values) => {
            console.log(values)
        }

    })
   
    return (
        <div className='container_register'>
            <div className="register">
                <div className="heading">
                    <h4 className="">Register</h4>
                    <img src={x} alt="" />
                </div>

                <form action="" onSubmit={formik.handleSubmit} >
                    <input 
                        type="text" 
                        id="email" 
                        name='email' 
                        placeholder='Mail' 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (<p className='errors'>{formik.errors.email}</p>)}

                    <div className='Button-register '>
                        <button  type='submit' className='btn-sign_up'>REGISTER</button>
                        <div className='Or'>
                            <div className='line'></div>
                            <p>OR</p>
                            <div className='line'></div>
                        </div>
                    </div>

                    <div className="two-btn">
                        <div className="btn-gg">
                            <img src={gg} alt="" />
                        </div>
                        <div className="btn-fb">
                            <img src={fb} alt="" />
                        </div>
                    </div>

                    <div className="info">
                        <div className='service'>
                            <p>By registering, you agree to</p>
                            <a href="#">Terms of Service & Privacy Policy</a>
                        </div>
                        <div className="account">
                            <p>Do you already have an account ? </p> <a href="/" className='link-login'>Login</a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register