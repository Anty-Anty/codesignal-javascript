//https://app.codesignal.com/arcade/intro/level-5/g6dc9KJyxmFjB98dL

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    if ((yourLeft == friendsLeft || yourLeft == friendsRight) && 
        (yourRight == friendsLeft || yourRight == friendsRight)){
        return true
        } else {return false}
}