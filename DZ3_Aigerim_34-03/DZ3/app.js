var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var tagCounts = {};

tags.forEach(item => {
        if (tagCounts[item]) {
            tagCounts[item]++;
        } else {
            tagCounts[item] = 1;
        }
    }
)
console.log(tagCounts)

var massive1 = [1,2,3,45,32,56,61, 23,12,2,34,5,6,3,76,67,87,76]
var massive2 = [1,45,32,3,4,2,56,76,67,87,89,8,56,54]
var newMassives = []

for(var i = 0; i < massive1.length; i++){
    if(massive2.includes(massive1[i])){
        newMassives.push(massive1[i])
    }}
console.log(newMassives)