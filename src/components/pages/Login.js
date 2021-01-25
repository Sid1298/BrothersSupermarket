import React from 'react'

const Login = () => {
    return (
        <div className='mx-auto card bg-dark w-50 m-5 p-3'>
            <div className='container'>
                <h1 className='text-center text-light m-3'>LOGIN</h1>
                <form className='m-3 mx-auto d-flex flex-row justify-content-center'>
                    <label className='mx-2 text-light'>Email ID : </label>
                    <input type='text'></input>
                </form>
                <form className='m-3 mx-auto d-flex flex-row justify-content-center'>
                    <label className='mx-2 text-light'>Password : </label>
                    <input type='password'></input>
                </form>
                <form className='d-flex flex-column m-4'>
                    <button className='mx-auto btn btn-light btn-sm m-2 w-50'>Login with Google</button>
                    <button className='mx-auto btn btn-primary btn-sm m-2 w-50'>Login with Facebook</button>
                </form>
            </div>
        </div>
    )
}

export default Login
