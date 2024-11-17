import World from "./World";
import styles from "./Hello.module.css"
import { useState } from "react";
import UserName from "./userName";
const Hello = function({age}){
    // console.log(props);

   function showName() {

        console.log("NEKIM");
    }
    function showAge(age) {

        console.log(age);
    }
    function showText(e) {

        console.log(e.target.value);
    }

    // let name = "NEKIM";
    const [name, setName] = useState("NEKIM");
   // const [age, setAge] = useState(props.age);
   
    function changeName(){
        
        // document.getElementById("name").innerText = name;
        setName(name === "NEKIM" ? "HAPPY" : "NEKIM");
      
       // setAge(age + 1);
    }
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";


   return (<div> 
                <h2 id="name">{name}({age}) : {msg} </h2>
                <UserName name={name}/>
                <button onClick={changeName}>Change</button>


                {/* <div className={styles.box}>Hello</div>
                <button onClick={showName}>Show name</button>
                <button 
                    onClick={() => {
                        showAge(10);
                    }
                }>Show age
                </button>
                <input type="text" onChange={showText}></input> */}
            </div>
        );
};

export default Hello;


