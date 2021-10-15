function roman(number) {
    let digits = number.toString().split('');
    let numberArray = digits.map(Number)
    let result = []

    for (let i = 0; i < numberArray.length; i++) {
        let step = -Math.abs(i+1)
        let type = i+1
        let romType = link(type)
        for (let j = 0; j < numberArray[-step]; j++) {
            let test = -Math.abs(j+1)
            console.log(romType[1])
            result.push(romType[1])
            result = result.shift()
        }
    }
    
    console.log(result)
}
roman(1234)
/* export default roman */

function link(type, number){
    var result = []

    switch (type) {
        case 4:
            result.push("M", "C")
            break;
        case 3:
            result.push("C", "X")
            break;
        case 2:
            result.push("X", "I")
            break;
        case 1:
            result.push("I", "V")
            break;
    
        default : null
            break;
    }


    return (result)
}