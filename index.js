function saturdayFun(activity='roller-skate'){
    return(`This Saturday, I want to ${activity}!`)
}
saturdayFun()

const mondayWork = function( activityTwo ='go to the office'){
   return(`This Monday, I will ${activityTwo}.`) 
}

function wrapAdjective(special="*"){
    return function (name="special"){
        return (`You are ${special}${name}${special}!`)
        
    }
    
    }