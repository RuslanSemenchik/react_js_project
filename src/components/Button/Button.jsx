import './styles.css'
function Button({buttonName = "Send", onClick = ()=>{}, type = "button" }){
    return <button className="button_component" onClick={onClick} type ={type}>
        {/* {children ? "" : buttonName}  - вариант 1*/}
        {/* {!children && buttonName} */}
        {buttonName}
        </button>
}
export default Button;