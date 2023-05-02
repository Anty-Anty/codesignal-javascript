//https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/r9azLYp2BDZPyzaG2

function solution(value1, weight1, value2, weight2, maxW) {
    function Item (value, weight){
        this.value = value;
        this.weight = weight;
    }
    
    let item1 = new Item (value1, weight1);
    let item2 = new Item (value2, weight2);

    let totalWeight = item1.weight+item2.weight

    if (totalWeight<=maxW){
        return item1.value+item2.value
    } else {
        if (item1.weight <= maxW && item2.weight <= maxW){
            if (item1.value>item2.value){
                return item1.value
            } else {return item2.value}
        } else if(item1.weight > maxW && item2.weight > maxW){
            return 0
        } else if (item1.weight<=maxW){
            return item1.value
        } else if (item2.weight<=maxW){
            return item2.value
        } 
    }
}