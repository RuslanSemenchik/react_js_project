import './styles.css'
import {user} from '../../homeworks/Homework_02/data';
function Card ({
  // object - пример если передавать сразу объект а не ключи
  avatarURL = "",
  firstName = "Name",
  lastName = "Last Name",
  job = "-",
  hobby = "-",
  }) {
  return (
    <div className="user_card_components">
      {/* <img className="avatar" src={object.avatarURL} alt="User Avatar" /> */}
      <img className="avatar" src={avatarURL} alt="User Avatar" />
      {/* <p className="card_info">
        <span className="info_title">Fullname:</span>
        {`${object.firstName} ${object.lastName}`}
        </p> */}
        <p className="card_info">
        <span className="info_title">Fullname:</span>
        {`${firstName} ${lastName}`}
      </p>
      {/* <p className="card_info">
        <span className="info_title">Job:</span>
        {object.job}
      </p> */}
      <p className="card_info">
        <span className="info_title">Job:</span>
        {job}
      </p>
       {/* <p className="card_info">
        <span className="info_title">Hobby:</span>
        {object.hobby}
      </p> */}
      <p className="card_info">
        <span className="info_title">Hobby:</span>
        {hobby}
      </p>
    
    </div>
  );
}

export default Card