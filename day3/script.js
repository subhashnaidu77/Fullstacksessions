let student ={
    name:"nitesh",
    skills: ["html","css","js"]
};

// console.log(student.skills[0]);

for(let key in student){
    if(Array.isArray(student[key])){
        for(let i=0;i<student[key].length;i++){
            console.log(student[key][i]);
        }
    }else{
        console.log(student[key]);
    }
}