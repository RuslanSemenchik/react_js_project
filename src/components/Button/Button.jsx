import './styles.css'
function Button({buttonName = "Send", onClick = ()=>{}, type = "" }){
    return <button className="button_component" onClick={onClick}>
        {/* {children ? "" : buttonName}  - вариант 1*/}
        {/* {!children && buttonName} */}
        {buttonName}
        {!type} 
        </button>
}
export default Button;