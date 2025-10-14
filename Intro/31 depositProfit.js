//https://app.codesignal.com/arcade/intro/level-7/8PxjMSncp9ApA4DAb

function solution(deposit, rate, threshold) {
	let count = 0;
	while (deposit<threshold){
		let percantage = (rate/100)*deposit;
		deposit = deposit + percantage;
		count+=1
	}
	return count
}