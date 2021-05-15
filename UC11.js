// Object Operations using Arrow Functions
let totalWages = empDailyHrsAndWageArr
                    .filter(empDailyHrsAndWageArr => empDailyHrsAndWageArr.dailyWage > 0)
                    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHours = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC 11A Total Hours: " +totalHours+ "Total Wages: "+totalWages);

ProcessingInstruction.stdout.write("UC 11B Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                .forEach(dailyHrsAndWage => ProcessingInstruction.stdout.write(dailyHrsAndWage.toString));

let partWorkingDayStr = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                        .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11C PArtWorkingDayStrings: "+ partWorkingDayStrArr);


let nonWorkingDayNums = empDailyWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D NonWorkingDayNums: "+nonWorkingDayNums);