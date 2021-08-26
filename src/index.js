function eval() {
    // Do not use eval!!!
    return;
}

function isolate(perem){

    perem = new Function(`return ${perem}`)()
    
    if(typeof(perem) === "number") {return perem}
    
    else {return 0}
    
}
    
    
    function expressionCalculator(expr) {
    
        let result = expr.split(' ').join('')
        let bracketsCount = 0
        
        for( i=0; i < result.length; i++){
        
            if(result[i] === '(' ) ++bracketsCount;
            
            if(result[i] === ')' ) --bracketsCount;
            
        }
        
       if (bracketsCount != 0) {throw ('ExpressionError: Brackets must be paired!')}
       
       if (result.includes('/0')) {throw ('TypeError: Division by zero.')}
       
    return isolate(result)
    }

module.exports = {
    expressionCalculator
}