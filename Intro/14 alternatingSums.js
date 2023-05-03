//https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9

function solution(a) {

    let team1weigth = 0;
    let team2weigth = 0;
    
    for (i=0; i<a.length; i++){
        if (i%2==0){
            team1weigth+=a[i];
        } else {team2weigth+=a[i];}
    }

    let result = [];
    result.push(team1weigth);
    result.push(team2weigth);

    return result
}