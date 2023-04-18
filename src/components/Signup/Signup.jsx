import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Signup = () => {
    const [error,setError]=useState('');
    const {createUser}=useContext(AuthContext);

    const handleSignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        console.log(email,password,confirm);

        setError('');

        if(password != confirm){
            setError('Your password did not match');
            return;
        }
        else if(password.length<6){
            setError('password should be at least 6 characters')
            return;
        }
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>SignUp</h2>
        <form onSubmit={handleSignUp}>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" id="" required/>
            </div>
            <div className='form-control'>
                <label htmlFor='confirm'>Confirm password</label>
                <input type="password" name="confirm" id="" required/>
            </div>
            <input className='btn-submit' type="submit" value="Sign UP" />
        </form>
        <p><small>Already Have An Account?<Link to="/login">Login</Link></small></p>
        <p className='next-error'>{error}</p>
    </div>
    );
};

export default Signup;