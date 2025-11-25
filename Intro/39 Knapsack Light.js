//https://app.codesignal.com/arcade/intro/level-9/r9azLYp2BDZPyzaG2

function solution(value1, weight1, value2, weight2, maxW) {
    
    function Item(value, weight) {
        this.value = value;
        this.weight = weight;
    }

    const itemOne = new Item(value1, weight1);
    const itemTwo = new Item(value2, weight2);

    if (itemOne.weight + itemTwo.weight <= maxW){
        return itemOne.value + itemTwo.value
    } else if (itemOne.value > itemTwo.value && itemOne.weight <= maxW){
        return itemOne.value
    } else if (itemTwo.value > itemOne.value && itemTwo.weight <= maxW){
        return itemTwo.value
    } else if (itemTwo.value < itemOne.value && itemTwo.weight <= maxW){
        return itemTwo.value
    } else if (itemOne.value <= itemTwo.value && itemOne.weight <= maxW){
        return itemOne.value
    } else {return 0}
}