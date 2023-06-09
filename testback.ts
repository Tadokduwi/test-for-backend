//Question 1: digisible
//(1) It is written with all different numbers
//(2) None of the digits is zero
//(3) it is divisible by each of its digits
function isDigisible(n:number):boolean{
    if(n != 0 && n % 2 === 0){
        return true
    }
    else{
        return false
    }
}
console.log(isDigisible(12));

//Question 2: hand score ทำไม่ได้ครับ
  

//Question 3: clock angle

function getClockAngle(hh_mm:string):number {  
    const [hours, minutes] = hh_mm.split(':').map(Number)
    const hourAngel = ((hours * 30) - (minutes * 5.5));
    let angle = Math.abs(hourAngel - 360)

    return angle;

}

console.log(getClockAngle("09:00"));
console.log(getClockAngle("17:30"));





