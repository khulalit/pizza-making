export function getMessage(stage: number):string{
    switch(stage){
        case 0:
        case 1:
            return "Please select base of the pizza. We have two type of base."
        case 2: 
            return "Please select toppings combination of the pizza. We have three type of toppings."
        case 3: 
            return "Click on 'Make my Pizza' to finish order."
        default : 
            return "Click on 'Make my Pizza' to finish order." 
        
    }

}