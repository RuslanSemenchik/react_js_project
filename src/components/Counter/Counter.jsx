import "./styles.css";
import Button from "../Button/Button";
// 1 шаг: импортировать функцию хук useState() из библиотеки React
import { useState } from "react";
function Counter (){
    // При старом способе копмонент Counter не перезашружается и не может показать на странице актуальное значение переменной count(не происходит перерендер)
  //   let count = 0;
  //   console.log("count in Counter component:", count);

  //   const onMinus = () => {
  //     // Тут пишем логику по уменьшению значения счетчика на 1
  //     count = count - 1;
  //     console.log("count in onMunus Function:", count);
  //   };

  //   const onPlus = () => {
  //     // Тут пишем логику по увеличению значения счетчика на 1
  //     count = count + 1;
  //     console.log("count in onPlus Function:", count);
  //   };

  // Синтаксис без деструктуризации
  //   const state = useState(0);
  //   console.log(state);
  //   console.log(state[0]);
  //   console.log(state[1]);

  // Синтаксис с деструктуризацией
  // Функция-хук useSate() возвращает массив из 2 элементов
  // - 1 элемент - это переменная сотояния
  // - 2 элемент - функция, которая меняет это состояние
  // По умолчанию count = undefined, если мы ничего не передадим в качестве аргумента в функцию useState()
 const [count, setCount] = useState(0);

  const onMinus = () => {
    // Тут пишем логику по уменьшению значения счетчика на 1
    setCount((prevValue) => {
      return prevValue - 1;
    });
  };
  const onPlus = () => {
    // Тут пишем логику по увеличению значения счетчика на 1
    console.log(count);
    setCount((prevValue) => {
      console.log(prevValue);
      return prevValue + 1;
    });
    console.log(count);
  };

  
  //   Пример 1
  //   const [personName, setPersonName] = useState("Jonhy Depp");

  //   const changeName = () => {
  //     setPersonName("John Johnson");
  //   }

  // Пример 2
  //   const [animals, setAnimals] = useState(["Pig", "Cat", "Dog"]);

  //   const addRatt = () => {
  //     setAnimals((prevValue) => {
  //       return [...prevValue, "Ratt"];
  //     });
  //   };
  



    return <div className="counter-wrapper">
        <div className="button-control">
            <Button 
            onClick={onMinus}
            buttonName= "-"/>
        </div>
        <p className="count">{count}</p>
        <div className="button-control">
            <Button
            onClick={onPlus}
            buttonName= "+"
            />
        </div>
    </div>

    
}
export default Counter;