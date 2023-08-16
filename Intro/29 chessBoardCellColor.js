//https://app.codesignal.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi

function solution(cell1, cell2) {
    // make array of possible letters in cells names
    let arr = ['A','B','C','D','E','F','G','H'];

    // variables to store numbers and letters of cells names
    let n1 = Number(cell1[1]);
    let l1 = 0;
    let n2 = Number(cell2[1]);
    let l2 = 0;

    // compare letter against array to get numerical value of letter
    for (let i=0;i<arr.length;i++){
        if (cell1[0]==arr[i]){
            l1 = i+1;
        }
        if (cell2[0]==arr[i]){
            l2 = i+1;
        }
    }
    // variables to store color of cell
    let colorCell1 = '';
    let colorCell2 = '';
    // check color of cell
    // dark cells always have both coordinates as even numbers
    // or both coordinates as uneven numbers
    if ((l1%2!=0 && n1%2!=0) || (l1%2==0 && n1%2==0)){
        colorCell1 = 'dark';
    } else {colorCell1 = 'light';}

    if ((l2%2!=0 && n2%2!=0) || (l2%2==0 && n2%2==0)){
        colorCell2 = 'dark';
    } else {colorCell2 = 'light';}

    return colorCell1 == colorCell2

}