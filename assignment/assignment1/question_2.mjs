/* 
make a arrow function named isGreaterThan18 , pass a value , t
he function must return true if the given age is greater or equals to 18 otherwise return false
*/

// const isGreaterThan18=(age)=>{
//     return age>=18?true:false;
// }
const isGreaterThan18=(age)=>{
    if(age>=18){
        return true;
    }else{
        return false;
    }
}

console.log(isGreaterThan18(18));