import './styles.css'
function Input({name = "",type = "", placeholder = "Enter your...",label}){
    return <div className="loginForm_input_container" >
    
            <label className="loginForm_label">{label}</label>
            <input className="input_component"
            name= {name}
            type= {type}
            placeholder= {placeholder}
          />  
           </div>
}
export default Input;