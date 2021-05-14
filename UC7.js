// Array Helper Functions
// UC 7A - Calc total Wage using Array forEach traversal or reduce method
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays +
" Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);

function totalWages(totalWages, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: " + 
            empDailyWageArr.reduce(totalWages, 0));

// UC 7B - Show the Day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

// UC 7C - Show Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D -Find the first occurrence when Full Time Wage was earned using function

function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earned on Day: " +
            mapDayWithWageArr.find(findFulltimeWage));

// UC 7E - Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 6E - Check All Element have Full Time Wage: "+
            fullDayWageArr.every(isAllFulltimeWage));

// UC 7F - Check if there ia any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time Wage: "+
            mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G - Find the  number of days the Employee Worked
function totalDaysWorked(numOFDays, dailyWage){
    if (dailyWage > 0) return numOFDays+1;
    return numOFDays;
}
console.log("UC 7G - Number of Days Emp Worked: "+
            empDailyWageArr.reduce(totalDaysWorked,0));