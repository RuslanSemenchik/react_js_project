import './styles.css'
import {user} from '../../homeworks/Homework_02/data';
function Card (){
    return <div>
        <div className="user_card_components">
        <h3 className="card_title">USER'S CARD </h3>
        <img className = "avatar" src= {user.avatarURL} alt="User image" />
        <p className="card_name"> {`${user.firstName} ${user.lastName}`} </p>
        <p className="card_info">Profession: {user.profession} </p>
        <p className="card_info">Hobby: {user.hobby} </p>
      </div>
    </div>
}
export default Card