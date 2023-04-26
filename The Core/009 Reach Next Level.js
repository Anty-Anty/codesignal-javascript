//https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/m9wjpkCjgofg7gs8N

function solution(experience, threshold, reward) {
    let experienceGained = experience + reward;
    if(experienceGained >= threshold){
        return true
    } else { return false };
}
