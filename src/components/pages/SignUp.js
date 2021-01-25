import React from 'react'

const SignUp = () => {
    return (
        <div className='mx-auto card bg-dark w-50 m-5 p-3'>
            <div className='container'>
                <h1 className='text-center text-light m-3'>SIGN UP</h1>
                <form className='m-3 mx-auto d-flex flex-row justify-content-center'>
                    <label className='mx-2 text-light'>First Name : </label>
                    <input type='text'></input>
                </form>
                <form className='m-3 mx-auto d-flex flex-row justify-content-center'>
                    <label className='mx-2 text-light'>Last Name : </label>
                    <input type='text'></input>
                </form>
                <form className='m-3 mx-auto d-flex flex-row justify-content-center'>
                    <label className='mx-2 text-light'>Email ID : </label>
                    <input type='text'></input>
                </form>
                <form className='m-3 mx-auto d-flex flex-row justify-content-center'>
                    <label className='mx-2 text-light'>Password : </label>
                    <input type='password'></input>
                </form>
                <form className='d-flex flex-column m-4'>
                    <button className='mx-auto btn btn-light btn-sm m-2 w-50'>SignUp with Google</button>
                    <button className='mx-auto btn btn-primary btn-sm m-2 w-50'>SignUp with Facebook</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
