import Card from '../../components/Card/Card';
import "./styles.css";
import Button from '../../components/Button/Button';
function Lesson_03() {

  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Security Specialist",
    hobby: "Bear, TV, FastFood",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No Job",
    hobby: "coocking",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };

  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "Skate",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };

  const getUser = () => {
    console.log("Button works");
  };


  

    return <div className="lesson_03_page_wrapper">
        {/* ПРИМЕР как передавать сразу объект  */}
        {/* <Card object = {homerSimpson} />
            <Card object = {margeSimpson} />
            <Card object = {bartSimpson} /> */}

        <Card 
        avatarURL={homerSimpson.avatarURL} 
        firstName={homerSimpson.firstName} 
        lastName= {homerSimpson.lastName}
        job={homerSimpson.job} 
        hobby={homerSimpson.hobby}
        />
        <Card 
        avatarURL={margeSimpson.avatarURL} 
        firstName={margeSimpson.firstName} 
        lastName= {margeSimpson.lastName}
        job={margeSimpson.job} 
        hobby={margeSimpson.hobby}
        />
        <Card 
        avatarURL={bartSimpson.avatarURL} 
        firstName={bartSimpson.firstName} 
        lastName= {bartSimpson.lastName}
        job={bartSimpson.job} 
        hobby={bartSimpson.hobby}
        />
      
{/* // Как мы работали с событиями раньше на базовом курсе
  // const button = document.querySelector("#get-button");

  // button.addEventListener('click', () => {
  //   console.log("Button works")
  // }); */}
  


      <div className="buttonContainer">
        <Button 
        onClick={getUser}
        buttonName={"Get User"}
        />
        <Button 
        onClick={()=>{console.log("send request")}}
        buttonName={"Set request"}
        />
        <Button 
        onClick = { () => {console.log ("send LIKE")}}
        >
          
          <img
          className="icon"
            src="https://cdn-icons-png.flaticon.com/512/9971/9971680.png"
            />
          </Button>
        {/* <button id="get-button">Get</button> */}
        {/* <button onClick={getUser}>Get</button>  */}
      </div>
      
      </div>
};

export default Lesson_03;
