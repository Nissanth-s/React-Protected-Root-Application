import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginState } from "../../redux/commonReducers";

import "./login.css"
import { userLoginData } from "../../redux/apis/userLoginReducer";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginValidationSchema = Yup.object({
        email: Yup.string().required('Please Enter Email'),
        password: Yup.string().required('Please Enter Password')
    });

    const { data, error } = useSelector(
        (state) => state?.userLoginDataSlice
    );

    const loginFn = (requestParams) => {
        dispatch(userLoginData(requestParams));
    }

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }, [error])

    useEffect(() => {
        if (data?.token) {
            Cookies.set('token', data.token, { expires: 7, secure: true });
            dispatch(loginState(true));
            navigate('/dashboard')
        }
    }, [data, navigate, dispatch])

    return (
        <div className="container custom-login">
            <ToastContainer />
            <div className="row m-5 no-gutters shadow-lg">
                <div className="col-md-6 d-none d-md-block">
                    <img src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" className="img-fluid" alt="Login" />
                </div>
                <div className="col-md-6 bg-white p-5">
                    <h3 className="pb-3">Login Form</h3>
                    <div className="form-style">
                        <Formik
                            initialValues={{
                                email: "",
                                password: ""
                            }}
                            validationSchema={loginValidationSchema}
                            onSubmit={(values) => {
                                loginFn(values)
                            }}
                        >
                            {(formik) => {
                                return (
                                    <>
                                        <Form>
                                            <div className="form-group pb-3">
                                                <Field
                                                    type="text"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                />
                                                {formik.errors.email ? (
                                                    <div className="form-error">{formik.errors.email}</div>
                                                ) : null}
                                            </div>

                                            <div className="form-group pb-3">
                                                <Field
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="Enter Password"
                                                />
                                                {formik.errors.password ? (
                                                    <div className="form-error">{formik.errors.password}</div>
                                                ) : null}
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center"><input name="" type="checkbox" value="" /> <span className="pl-2 font-weight-bold remember">Remember Me</span></div>
                                                <div><a href="/">Forget Password?</a></div>
                                            </div>
                                            <div className="pb-2">
                                                <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2">Submit</button>
                                            </div>
                                        </Form>
                                        <div className="sideline">OR</div>
                                        <div>
                                            <button type="submit" className="btn btn-primary w-100 font-weight-bold mt-2"><i className="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</button>
                                        </div>
                                        <div className="pt-4 text-center">
                                            Get Members Benefit. <a href="/">Sign Up</a>
                                        </div>
                                    </>
                                );
                            }}
                        </Formik>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Login;