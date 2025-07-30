import Button from '../../components/Button/Button.jsx';
import {animal} from './data.js';
import './styles.css';
function Lesson_02 (){
    return <div>
        <div className="animal_card">
        <h3 className="card_title">Animal card: {animal.type}</h3>
        <img className = "avatar" src= {animal.avatarURL} alt="Animal image" />
        <p className="card_info">Name: {animal.fullName} </p>
        <p className="card_info">Age: {animal.age} </p>
        <p className="card_info">Color: {animal.color} </p>
        <p className="card_info">Is planteater? {animal.isPlanteater ? "Yes" : "No" } </p>
        <Button />

      </div>
    </div>
}
export default Lesson_02