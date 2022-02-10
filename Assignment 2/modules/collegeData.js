class Data{
    constructor(students, courses ){ 
        this.students = students
        this.courses = courses
        
    }

}
var dataCollection = null


module.exports.initialize = function() {

return new Promise(function(resolve, reject) {

    const fs = require('fs')

    fs.readFile('./data/students.json', 'utf8', function(err, dataFromStudents){
    if (err){
        reject("Unable to load student.JSON");
        
        return ; 
    }
    

    fs.readFile('./data/courses.json', 'utf8', function(err, dataFromCourses){
        if (err){
            reject("Unable to load course.JSON");
            
            return ; 
        }
     
    

    dataCollection = new Data(JSON.parse(dataFromStudents),JSON.parse(dataFromCourses));
    
    
    getAllStudents(dataCollection)
    getCourses(dataCollection)
    getTAs(dataCollection)
    
  });
});
});
}

function getAllStudents(dataCollection){
    return new Promise(function(resolve, reject) {
        this.dataCollection = dataCollection
        
        result = dataCollection.students
        lengthOfArray = result.length
        if(lengthOfArray==0){
            reject("no results returned");
            
            return ; 
        }
        console.log('Successfully retrieved  '+ lengthOfArray +' students');
    });
}

function getCourses(dataCollection){
    return new Promise(function(resolve, reject) {
        
        this.dataCollection = dataCollection
        result = dataCollection.courses
        lengthOfArray = result.length
        if(lengthOfArray==0){
            reject("no results returned")
            
        }
        console.log('Successfully retrieved  '+ lengthOfArray +'  courses');
})
}

function getTAs(dataCollection){

    return new Promise(function(resolve, reject) {
        this.dataCollection = dataCollection
        
        result = dataCollection.students;
        array = [];

        for (let i = 0; i < result.length; i++) {
            var temp = result[i]
            if (temp['TA']==true){
                array.push(temp)
            }
            
        }
        lengthOfArray = array.length
        if(lengthOfArray==0){
            reject("no results returned");
                
                return ; 
        }
        
        console.log('Successfully retrieved  '+ lengthOfArray +'  TAs');
    });  
}







