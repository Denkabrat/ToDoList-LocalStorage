import {NavLink}   from 'react-router-dom';
import { useState} from 'react';
import './LoginPage.scss'


const LoginPage = (props) => {

    const {userData,fontColor} = props;

    const [loginData,setLoginData] = useState('');
    const [passwordData,setPasswordData] = useState('');
    const [emailData,setEmailData] = useState('');

    const [route,setRoute] = useState('')

    const btn = document.querySelector('.btn_LogIn');


    const handleSubmit = () => {


        if(userData.length === 0){
            alert('У вас нет аккаунта !')
        }

        userData.forEach(element => {
            const {id,login,password,secondPassword,email} = element;


            if(loginData === login && password === passwordData && passwordData === secondPassword && email === emailData){
                setRoute('/MainPage')
                btn.style.backgroundColor = 'green';
            }
            else{
                alert('Неверный логин или пароль или почта');
            }
            
        });   

   
    }

        return(
            <div>
                <h1 className='SignIn' style={{color:fontColor}}>Sign In</h1>
                <form action="submit" onSubmit={handleSubmit}>
                    <input 
                    style={{color:fontColor}}
                    onChange={e => setLoginData(e.target.value)}
                    maxLength='30'
                    className='data_Input' 
                    name="login"    
                    type='text' 
                    placeholder="Enter your login"/>

                    <input 
                    style={{color:fontColor}}
                    onChange={e => setEmailData(e.target.value)}
                    maxLength='30'
                    className='data_Input' 
                    name="email"    
                    type='email' 
                    placeholder="Enter your email"/>
    
    
                        <input 
                        style={{color:fontColor}}
                        onChange={e => setPasswordData(e.target.value)}
                        maxLength='30'
                        className='data_Input' 
                        name="password" 
                        type='password' 
                        placeholder="Enter your Password"/>
    
                     <NavLink to={route}><button 
                     
                     className='btn_LogIn' 
                     onClick={()=> handleSubmit()}
                     type="submit">Log in</button> </NavLink> 

                     <NavLink to='/reg' className='link_to_create'><button className='btn_create_acc'>Create a new account</button></NavLink>
                     <NavLink to='/del' className='link_to_delete'><button className='btn_delete_acc'>Forgot password ?</button></NavLink>

                </form>
            </div>
        )
    
    
    }

export default LoginPage;