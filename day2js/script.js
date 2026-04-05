//  let student= {
//             name: "dipu",
//             //key : value 
//             age: 25,
//             course: "MERN"
//         };
// to print  keys of an object 
        // for(let key in student){
        //     console.log(key);
        // }

// to print values inside the obj 
// for(let key in student){
// console.log(student[key]);
// }


 let student= {
            name: "dipu",
            //key : value 
            age: 25,
            course: "MERN",
            address: {
                city : "hyderabad",
                pincode: "500001"
            }
        };
        // console.log(student.address.city);
        // console.log(student["address"]["city"]);
        // address: door , city , state , country , pincode 

        for(let key in student){
            if(typeof student[key]==="object"){
                for(let innerKey in student[key]){
                    console.log(innerKey+ ":"+ student[key][innerKey]);
                }
            }
            else{
                console.log(key +":"+student[key] );
            }
        }