
//Task:Area of the circle
console.log (Math.PI*Math.pow(8,2));

//Task:Time
var date= new Date;

var time=date.getHours();
console.log(time)

if (time>6 && time<12) {

    alert('Good morning')
    document.body.style.backgroundColor= 'white'
    
} 

if (time>12 && time<18) {

    document.body.style.backgroundColor= 'orange'
    alert('good afternoon')
    
    
} 
else {

    alert('good evening')
    document.body.style.backgroundColor= 'black'

    
}




