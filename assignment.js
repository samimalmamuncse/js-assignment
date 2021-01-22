//https://github.com/samimalmamuncse/js-assignment


//kilometerToMeter convert. Number 1

function kilometerToMeter(kilometer) {
    const Meter = kilometer*1000;
    return Math.abs(Meter);
}


//budgetCalculator 3 ta jinish er total ber kora. Number 2

 function budgetCalculator(watch,phone,laptop){
        var result = watch*50+phone*100+laptop*500;
        return (result);
        }


//hotelCost calculate by day number. Number 3

function hotelCost(day){
    if(day >=1 && day<= 10)
        return day*100;
    else if(day>=11 && day<=20){
            return 10*100 + (day -10)*80;
        }
    else (day >=21)
        return (10*100) + (10*80)+ (day-20)*50;
}


//megaFriend longest word query from the array. Number 4

var megaFriend = ['jhankarMahbub','Habib','Shamim','Fahim','Alamin','Abadullah'];

function friends(arr){
    let length = 0;
    let longestWord;
    for(let i =0; i<arr.length; i++){
        if(arr[i].length > length){
            length = arr[i].length;
            longestWord = arr[i];
        }
    }
    return longestWord;

}
