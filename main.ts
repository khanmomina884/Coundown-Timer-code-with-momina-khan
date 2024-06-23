#! /usr/bin/env node
import chalk from "chalk";

console.log(chalk.red("=".repeat(60)));
console.log(chalk.yellow (" Welcome to Count Down Timer - Code with Momina -khan"));
console.log(chalk.red("=".repeat(60)));
import inquirer from "inquirer";

import { differenceInSeconds } from "date-fns";

const res = await inquirer.prompt({
    name:"usrInput",
    type:"number",
    message:"Please enter the amount of second",
    validate:(input)=>{
        if(isNaN(input)){
            return "Please enter valid number"
        }else if(input>60){
            return "seconds must be in 60"
        }else{
            return true;
        }
    }
});

let input = res.usrInput

function startTime(val: number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((()=>{
        const currTime = new Date()
        const timeDiff  = differenceInSeconds(intervalTime,currTime);

        if(timeDiff <= 0){
            console.log("Time has expired.");
            process.exit();
    
        }
        const min = Math.floor((timeDiff%(3600*24))/3600)
        const sec = Math.floor(timeDiff%60)
        console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);
        
      }),1000)
}

startTime(input);









