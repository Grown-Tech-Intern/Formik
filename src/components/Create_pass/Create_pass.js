import React from 'react'
import { useState } from 'react'
import x from '../../assets/x_circle.svg'
import unmask from '../../assets/unmask.svg'
import '././style.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Select from 'react-select'

function Create_pass() {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const [icon, setIcon] = useState(true)

    const handleIcon = () => {
        setIcon(!icon)
    }


    const chooseAge = [
        { value: "1", label: "Over 18 years" },
        { value: "2", label: "Under 18 years" }
    ]

    const [ShowHide, setShowHide] = useState('')
    const handleShowHide = (event) => {
        console.log(event);
        setShowHide(event.value)
    }


    const formik = useFormik({
        initialValues: {
            code: "",
            password: "",
            confirm_password: ""
        },

        validationSchema: Yup.object({
            code: Yup
                .number()
                .min(6, 'Invalid code')
                .positive()
                .integer()
                .required("Please fill in this field."),
            password: Yup
                .string()
                .min(8, 'Minimum of 8 characters')
                .max(16, 'Maximum of 16 characters')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "At least one uppercase letter, one number, one speacial character"
                )
                .required("Please fill in this field."),
            confirm_password: Yup
                .string()
                .min(8, 'Minimum of 8 characters')
                .max(16, 'Maximum of 16 characters')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "At least one uppercase letter, one number, one speacial character"
                )
                .oneOf([Yup.ref("password")], "Password's not match")
                .required("Please fill in this field."),
        }),

        onSubmit: (values) => {
            console.log(values)

        }

    })

    return (
        <div className='container_create'>
            <div className="create_pass">
                <div className="heading">
                    <h4 className="">Create a password</h4>
                    <img src={x} alt="" />
                </div>

                <div className="code_sent-email">
                    <p>Enter the confirmation code sent to the email</p>
                    <a href="/">nguyenthanhnhan@gmail.com</a>
                </div>

                <form action="" onSubmit={formik.handleSubmit} >
                    <div className="choose_the-age">
                        <h3>Choose your age</h3>
                        <Select options={chooseAge} onChange={(e) => (handleShowHide(e))} />
                    </div>

                    {ShowHide === "1" && (
                        <div>
                            <div className="enter_code">
                                <input
                                    type="number"
                                    id='code'
                                    name='code'
                                    placeholder='Enter code'
                                    value={formik.values.code}
                                    onChange={formik.handleChange}
                                />
                                <p>60s</p>
                            </div>
                            {formik.errors.code && formik.touched.code && (<p className='errors'>{formik.errors.code}</p>)}

                            <div className="enter_pass">
                                <input
                                    type={icon ? "password" : "text"}
                                    id='pass'
                                    name='password'
                                    placeholder='Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}

                                />
                                {formik.errors.password && formik.touched.password && (<p className='errors'>{formik.errors.password}</p>)}

                                <button type='button' className={icon ? "mask" : "unmask"} onClick={handleIcon}>
                                    <div ></div>
                                    <img src={unmask} alt="" />
                                </button>
                            </div>

                            <div className="enter_confirm">
                                <input
                                    type={toggle ? "password" : "text"}
                                    id='pass'
                                    name='confirm_password'
                                    placeholder='Confirm Password'
                                    value={formik.values.confirm_password}
                                    onChange={formik.handleChange}

                                />
                                {formik.errors.confirm_password && formik.touched.confirm_password && (<p className='errors'>{formik.errors.confirm_password}</p>)}

                                <button type='button' className={toggle ? "mask" : "unmask"} onClick={handleToggle}>
                                    <div ></div>
                                    <img src={unmask} alt="" />
                                </button>
                            </div>

                            <div className="button_confirm-pass" >
                                <button type='submit'>Confirm Password</button>
                            </div>
                        </div>
                    )}

                </form>

            </div>
        </div>

    )
}

export default Create_pass