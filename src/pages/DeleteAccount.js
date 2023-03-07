import { NavLink }  from "react-router-dom";
import { useState } from "react";
import './DeleteAccount.scss'

const DeleteAccount = (props) => {

   const {setUserData,userData,fontColor} = props;
   const [delLogin,setDelLogin] = useState('');
   const [delEmail,setDelEmail] = useState('');

  

const onSubmitDelete = (e) => {
 e.preventDefault();

    if(userData.length === 0){
        alert('У вас нет аккаунта !')
    }
    
    userData.map(item => {
        const {login,email} = item;

        if(delLogin === login && delEmail === email){
            localStorage.removeItem('user');
            setUserData([]);
            alert('Аккаунт был удален !')
        }else{
            alert('Ошибка,проверьте данные !')
        }
    })

   e.target.reset();
   
}

return(
    <div>
        <h1 style={{color:fontColor}}>You can remove your account</h1>

        <form action="submit" onSubmit={onSubmitDelete} >
                    <input 
                    onChange={e=> setDelLogin(e.target.value)}
                    style={{color:fontColor}}
                    maxLength='10'
                    className='data_Input' 
                    name="login"    
                    type='text' 
                    placeholder="Enter your login"/>

                <input 
                    style={{color:fontColor}}
                    onChange={e => setDelEmail(e.target.value)}
                    maxLength='30'
                    className='data_Input' 
                    name="email"    
                    type='email' 
                    placeholder="Enter your email"/>
    
                     <button  className='btn_create_account' type="submit"><span>Delete account</span></button>
                     <NavLink to='/' className='link_to_back'><button className='btn_create_acc'>Back to Log In</button></NavLink>
                </form>
    </div>
)


}

export default DeleteAccount;