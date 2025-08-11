import './styles.css'
import Button from '../Button/Button';
import Input from '../Input/Input';
function LoginForm(){
    
    // const testFunction = ()=>{
    //     console.log("Click on button test works")
    // }
    return  (<form   
        onSubmit={(event)=>
        { event.preventDefault();
        console.log(event);
        console.log("Login started")}} 
        className="loginForm_component" >
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
         type = {"password"}
         placeholder = {"Enter your password"}
        />
        
        <Button 
         buttonName = {"Login"}
         type = {"submit"}
        />
        {/* <button type = "button" onClick = {testFunction}>Test</button>
         - вариант 1*/}
         {/* <button type = "button" onClick = {()=>{console.log ("Click on button test works")}}>
        Test</button> */}
        </form> )
}
export default LoginForm;