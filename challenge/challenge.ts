const forld= (startingValue:any,operation:Function,list:Array<any>) => {
    if (list.length === 0) {
        return startingValue
    }
    else {
        for(const item in list){
            if (typeof(startingValue) != typeof(list[item])){
                throw new Error('you should provide a list and a starting value with the same type')
            }
            startingValue = operation(startingValue,list[item])
        }
     return startingValue
    }
}
// exemple 
const result = forld(0,(a:any, b:any) => a + b,[1,2,3,4])
console.log(result)