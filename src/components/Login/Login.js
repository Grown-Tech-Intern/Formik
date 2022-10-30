import React from 'react'
import { useState } from 'react'
import x from '../../assets/x_circle.svg'
import gg from '../../assets/logo_google.svg'
import fb from '../../assets/logo_fb.svg'
import unmask from '../../assets/unmask.svg'
import '././style.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'


function Login() {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email.').required('Please fill in this field.'),
            password: Yup
                .string()
                .min(8, 'Minimum of 8 characters')
                .max(16, 'Maximum of 16 characters')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "At least one uppercase letter, one number, one speacial character"
                )
                .required("Please fill in this field."),
        }),

        onSubmit: (values) => {
            console.log(values)
        }

    })

    return (
        <div className='container_login'>
            <div className="login">
                <div className="heading">
                    <h4 className="">Login</h4>
                    <img src={x} alt="" />
                </div>

                <form action="" onSubmit={formik.handleSubmit}>
                    <input
                        type="text"
                        id="email"
                        name='email'
                        placeholder='Email/ Username'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (<p className='errors characters'>{formik.errors.email}</p>)}

                    <div className="enter_pass">
                        <input
                            type={toggle ? "password" : "text"}
                            id='pass'
                            name='password'
                            placeholder='Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />

                        <button type='button' className={toggle ? "mask" : "unmask"}  onClick={handleToggle}>
                            <div ></div>
                            <img  src={unmask} alt=""/>
                        </button>
                        <p><a href="/forgot" >Forgot password ?</a></p>
                    </div>

                    <div className="error-forgot">
                        {formik.errors.password && formik.touched.password && (<p className='errors forgot characters'>{formik.errors.password}</p>)}
                        {/* <p><a href="#" >Forgot password ?</a></p> */}
                    </div>

                    <div className='Button-login '>
                        <button type='submit' className='btn-sign_in' >LOGIN</button>
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
                        <div className="account">
                            <p>Do not have an account ? </p> <a href="/register" className='link-register'> Register</a>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login