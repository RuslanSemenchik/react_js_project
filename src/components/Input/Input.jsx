import './styles.css'
function Input({id , name = "",type = "", placeholder = "Enter your...",label}){
    return <div className="loginForm_input_container" >
    
            <label className="loginForm_label" htmlFor={id}>{label}</label>
            <input className="input_component"
            id={id}
            name= {name}
            type= {type}
            placeholder= {placeholder}
          />  
           </div>
}
export default Input;