import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {

    const d1 = '김나은1';
    const d2 = '김나은2';
    const d3 = '김나은3';
  return (
    <div className="flex flex-col p-5 
                    justify-center items-center
                    w-2/3 h-2/3 text-2xl
                    bg-lime-900 text-white">
        <div className="w-full h-10 flex justify-start items-center">                
             {d1}
         </div>   
         <MyDiv2 dn1={d1} dn2={d2} dn3={d3}/>
    </div>
  )
}
