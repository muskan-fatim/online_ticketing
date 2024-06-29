#!/usr/bin/env node 

import inquirer from "inquirer";

let set =  await inquirer.prompt([{
    name :"start" ,
    message: "login or sign up for purchase",
    type:"list",
    choices: ["login","sign up"]
}])
if(set.start === "login"){
    let q =  await inquirer.prompt([{
        name :"q1" ,
        message: "Enter your email",
        type: "string",
    },{
        name: "q2",
        message: "Enter your password",
        type: "number"
    }

])


    let email :string = "mushi7893@gmail.com"
    let password = 568900
    
    if(q.q1=== email && q.q2 === password){
      console.log("welcome to our website ")

      let tick = await inquirer.prompt([{
        name : "normal",
        type: "list",
        message: "what do you want to do select please",
        choices:["Event view","buy tickets"]
      }])

      if(tick.normal === "Event view"){
      let event = await inquirer.prompt([{
        name: "st",
        message: "we offer special summer event there is lots of discounts offer  valid for 5 july press enter for details" ,
        type: "input",
      },{
        name:"part1",
        message: "what do you want to do in event offer",
        choices: ["buy tickects","check price"],
        type: "list"
      }
          ])

      if(event.part1 === "check price"){
      let price = await inquirer.prompt([{
         name: "setup",
         message: "select the city which ticket you want to buy",
         choices : ["karachi","lahore","multan","baku","dubai"],
         type:"list",
      }
    ])
    if(price.setup=== "karachi"){
        console.log("your ticket price is 8000 in event")
    }
    else if(price.setup=== "multan"){
        console.log("your ticket price is 9000 in event")
    }
    else if(price.setup=== "baku"){
        console.log("your ticket price is 10,000 in event")
    }
    else if(price.setup=== "lahore"){
        console.log("your ticket price is 7000 in event")
    }
    else if(price.setup=== "dubai"){
        console.log("your ticket price is 12,000 in event")
    }
}
if(event.part1 === "buy tickects"){
    let trans = await inquirer.prompt([{
        name: "bill",
        message: "enter your card number for buying a tickets",
        type: "input",
    },{
        name: "run",
        message:"select your destination city for purchasing",
        type: "list",
        choices: ["karachi","multan","baku","dubai","lahore"]
    }])
    if(trans.run === "karachi"){
        console.log("you purchased karachi tickets  succesfully")
    }
    if(trans.run === "multan"){
        console.log("you purchased multan tickets  succesfully")
    }
    if(trans.run === "lahore"){
        console.log("you purchased lahore tickets  succesfully")
    }
    if(trans.run === "baku"){
        console.log("you purchased baku tickets  succesfully")
    }
    if(trans.run === "dubai"){
        console.log("you purchased dubai tickets  succesfully")
    }
}
    }
    if(tick.normal === "buy tickets"){
        let pur = await inquirer.prompt([{
            name: "buy",
            type: "list",
            message: "select the airline for chart price of airline ",
            choices : [ "Emrites", "air blue", "qatar"]
        }
    ])
    if(pur.buy === "Emrites"){
        console.log( "check the rate chart\n"+

                    "karachi ticket : 9000 \n ",
    
                      "multan ticket :  8000 \n"
                    +
                      "lahore ticket :  10,000 \n" + 
                      
                      "baku  ticket :  15,000 \n"+
                
                      +"dubai ticket :   17,000 "
                      
        )
    }
    if(pur.buy === "air blue"){
        console.log("check the rate chart:\n",

                    "karachi ticket : 10,000\n ",
                      "multan ticket :  9,000\n",
                      "lahore ticket :  8000\n",
                      "baku  ticket :  10,000\n",
                      "dubai ticket :   13,000"
        )
    }
    if(pur.buy === "qatar"){
        console.log( "check the rate chart:\n", 
                     "karachi ticket : 12,000 \n",
                      "multan ticket :  10,000\n",
                      "lahore ticket :  9000\n",
                      "baku  ticket :  13,000\n",
                      "dubai ticket :   16,000"
        )
    }
}
    let confirm = await inquirer.prompt([{
        name: "con",
        type: "list",
        choices : [ "Emrites", "air blue", "qatar"],
        message: "please select  airline"
    },{
        name : "date",
        type: "input",
        message: "Enter a date and month you want to fly"
    },{
        name: "qun",
        type: "input",
        message: "Enter how many tickets you want to purchase"
    },{
            name: "city",
            type: "list",
            choices: ["karachi","multan","baku","dubai","lahore"],
            message: "please select city for purchase"
    
        },
       
    {
        name : "card",
        type: "input",
        message: "Enter your bank card number for payment"
    }
])
console.log(`Dear customer your ${confirm.con} ${confirm.city}  ${confirm.qun} tickets of ${confirm.date} purchased succesfuly `)

}
    else{
        console.log("invalid user sign up please")
    }
    

}
if(set.start === "sign up"){
    let Q =  await inquirer.prompt([{
        name :"q3" ,
        message: "Enter your email",
        type:"input",
    },{
        name: "q4",
        message: "Enter your password",
        type: "input"
    },{
        name: "q5",
        type: "input",
        message: "Enter your name"
    }

])
console.log(`welcome ${Q.q5} you succesfuly register`)

let c = await inquirer.prompt([{
    name: "d",
    type: "list",
    message: "select what do you want to do",
    choices: ["Event view", "buy tickets"]
}])
if(c.d === "Event view"){
let event1 = await inquirer.prompt([{
    name: "star",
    message: "we offer special summer event there is lots of discounts offer  valid for 5 july press enter for details" ,
    type: "input",
  },{
    name: "check",
    message: "what do you want to do ",
    choices: ["check price", "buy tickets"],
    type:"list"
  }
])

   if(event1.check === "check price"){
      let price1 = await inquirer.prompt([{
         name: "up",
         message: "select the city which ticket you want to buy",
         choices : ["karachi","lahore","multan","baku","dubai"],
         type:"list",
      }
    ])
if(price1.up=== "karachi"){
    console.log("your ticket price is 8000 in event")
}
else if(price1.up=== "multan"){
    console.log("your ticket price is 9000 in event")
}
else if(price1.up=== "baku"){
    console.log("your ticket price is 10,000 in event")
}
else if(price1.up=== "lahore"){
    console.log("your ticket price is 7000 in event")
}
else if(price1.up=== "dubai"){
    console.log("your ticket price is 13,000 in event")
}
    
}

if(event1.check === "buy tickets"){
    let tran = await inquirer.prompt([{
        name: "Bill",
        message: "enter your card number for buying a tickets",
        type: "input",
    },{
        name: "ru",
        message:"select your destination city for purchasing",
        type: "list",
        choices: ["karachi","multan","baku","dubai","lahore"]
    }])
    if(tran.ru === "karachi"){
        console.log("you purchased karachi tickets  succesfully")
    }
    if(tran.ru === "multan"){
        console.log("you purchased multan tickets  succesfully")
    }
    if(tran.ru === "lahore"){
        console.log("you purchased lahore tickets  succesfully")
    }
    if(tran.ru === "baku"){
        console.log("you purchased baku tickets  succesfully")
    }
    if(tran.ru === "dubai"){
        console.log("you purchased dubai tickets  succesfully")
    }
}

}
if(c.d === "buy tickets"){
        let pu = await inquirer.prompt([{
            name: "by",
            type: "list",
            message: "select the airline for chart price of airline ",
            choices : [ "Emrites", "air blue", "qatar"]
        }
    ])
    if(pu.by === "Emrites"){
        console.log( "check the rate chart\n",
                    "karachi ticket : 9000 \n",
                      "multan ticket :  8000\n",
                      "lahore ticket :  10,000\n",
                      "baku  ticket :  15,000\n",
                      "dubai ticket :   17,000"
        )
    }
    if(pu.by === "air blue"){
        console.log("check the rate chart:\n",
                    "karachi ticket : 10,000\n ",
                      "multan ticket :  9,000\n",
                      "lahore ticket :  8000\n",
                      "baku  ticket :  10,000\n",
                      "dubai ticket :   13,000"
        )
    }
    if(pu.by === "qatar"){
        console.log( "check the rate chart:\n", 
                     "karachi ticket : 12,000\n ",
                      "multan ticket :  10,000\n",
                      "lahore ticket :  9000\n",
                      "baku  ticket :  13,000\n",
                      "dubai ticket :   16,000"
        )
    }
}
    let con = await inquirer.prompt([{
        name: "co",
        type: "list",
        choices : [ "Emrites", "air blue", "qatar"],
        message: "please select  airline"
    },{
        name : "dat",
        type: "input",
        message: "Enter a date and month you want to fly"
    },{
        name: "qunantity",
        type: "input",
        message: "Enter how many tickets you want to purchase"
    }, {
        name: "cite",
        type: "list",
        choices: ["karachi","multan","baku","dubai","lahore"],
        message: "please select city for purchase"

    },
    {
        name : "car",
        type: "input",
        message: "Enter your bank card number for payment"
    }
])
console.log(`Dear customer your ${con.co}  ${con.cite} ${con.qunantity} tickets of ${con.dat} purchased succesfuly `)

}




