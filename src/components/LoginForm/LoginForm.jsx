import './styles.css'
import Button from '../Button/Button';
import Input from '../Input/Input';
function LoginForm(){
    return <form className="loginForm_component" >
        <p className="title_loginForm">Login form</p>
        
        <Input
        label={"Email"}
         name = {"email"}
         type = {"email"}
         placeholder = {"Enter your email"}
        />
        <Input
        label={"Password"}
         name = {"password"}
         type = {"number"}
         placeholder = {"Enter your password"}
        />
        
        <Button 
         onClick={()=>{console.log("set Login")}}
         buttonName = {"Login"}
         type = {"submit"}
        />
       
        </form>
}
export default LoginForm;