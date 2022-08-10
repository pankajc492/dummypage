var studentsInClass = [{
    'name' : 'pankaj',
    'rollNo' : '123',
    'result' : 'pass'
},{
    'name' : 'rohan',
    'rollNo' : '456',
    'result' : 'fail'
}]

var passedStudentsInClass = []
var failedStudentsInClass = []

var studentsofClass = (name,rollNo,result)=>{
        studentsInClass.push({"name":name,"rollNo":rollNo,"result":result})
        console.log(studentsInClass)
}

for(x of studentsInClass){
    console.log(x)
} if(x.result == "pass"){
    passedStudentsInClass.push[x]
}else{
    failedStudentsInClass.push[x]
}
console.log(passedStudentsInClass)
console.log(failedStudentsInClass)
studentsofClass('pankaj','123','pass')