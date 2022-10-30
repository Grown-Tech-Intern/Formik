import React from 'react'
import x from '../../assets/x_circle.svg'
import '././style.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Forgot() {
    const formik = useFormik({
        initialValues: {
            email: ""
        },

        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email.').required('Please fill in this field')
        }),

        onSubmit: (values) => {
            console.log(values);
        }

    })

    return (
        <div className='container_forgot'>
            <div className="forgot_pass">
                <div className="heading">
                    <h4 className="">Forgot Password </h4>
                    <img src={x} alt="" />
                </div>

                <form action="" onSubmit={formik.handleSubmit}>
                    <input
                        type="text"
                        id="email"
                        name='email'
                        placeholder='Email' 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (<p className='errors'>{formik.errors.email}</p>)}

                    <div className="button_find-account">
                        <button type='submit' >FIND ACCOUNT</button>
                    </div>

                    <div className="info">
                        <div className="account">
                            <p>Do you already have an account ? </p> <a href="/" className='link-register'>Login</a>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Forgot