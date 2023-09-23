let priceList = [30000, 2000, 11000, 33000, 2000, 100000,57000, 14000, 18000, 8000]

let from = prompt('цена от')
let up = prompt('цена до')

let students = ['baxtzod', 'xamza', 'islom', 'abdumanon', 'xojik', 'aziz']

let longestName = students.reduce((longest, name) => {
    if (name.length > longest.length) {
      return name;
    } else {
      return longest;
    }
  }, '');

  console.log(longestName);


for (let item of priceList) {
    if (item >= from && item <= up) {
        console.log(item);
    }
}