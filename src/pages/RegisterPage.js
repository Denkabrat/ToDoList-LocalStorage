import {NavLink} from 'react-router-dom';
import { v4 as uuidv4 }from 'uuid';
import { useState } from 'react';
import './RegisterPage.scss'


const RegisterPage = (props) => {

    const {userData,setUserData,fontColor} = props;

    const [login,setLogin] = useState();
    const [password,setPassword] = useState();
    const [repeatPassword,setRepeatPassword] = useState();
    const [email,setEmail] = useState();

   
    const createUser = (e) =>{
        e.preventDefault();

      
        if(userData.length === 1){
            alert('У вас уже есть аккаунт !')
        }
        

        if(password === repeatPassword && login.length > 5 && userData.length < 1 && email){
            setUserData([{
                id:uuidv4(),
                login:login,
                email:email,
                password:password,
                secondPassword:repeatPassword
        }, ...userData])
        alert('Аккаунт успешно создан !')
        e.target.reset();
        }else if (password !== repeatPassword && login.length > 5){
            alert('Пароли не совпадают или логин слишком короткий')
        }

       
    }

    

        return(
            <div>
                <h1 className='SignIn' style={{color:fontColor}} >Registration</h1>
                <form action="submit" onSubmit={createUser}>
                    <input 
                    style={{color:fontColor}}
                    onChange={e => setLogin(e.target.value)}
                    maxLength='10'
                    className='data_Input' 
                    name="login"    
                    type='text' 
                    placeholder="Enter your login"/>

                <input 
                    style={{color:fontColor}}
                    onChange={e => setEmail(e.target.value)}
                    maxLength='30'
                    className='data_Input' 
                    name="email"    
                    type='email' 
                    placeholder="Enter your email"/>
    
    
                        <input 
                        style={{color:fontColor}}
                        onChange={e => setPassword(e.target.value)}
                        maxLength='30'
                        className='data_Input' 
                        name="password" 
                        type='password' 
                        placeholder="Enter your Password"/>

                <input 
                        style={{color:fontColor}}
                        onChange={e => setRepeatPassword(e.target.value)}
                        maxLength='30'
                        className='data_Input' 
                        name="password" 
                        type='password' 
                        placeholder="Repeat your Password"/>
    
                     <button  className='btn_create_account' type="submit"><span>Create a new account</span></button>
                     <NavLink to='/' className='link_to_enter'><button className='btn_create_acc'>Have a account ?</button></NavLink>
                </form>
            </div>
        )
        }
    
    

export default RegisterPage;