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

console.log(Object.keys(tagCounts).sort((n1,n2) => {
  return  tagCounts[n2] - tagCounts[n1]
}))

function getFIO (surname, name, surname2){
    return surname[0].toUpperCase() + surname.slice(1) + ' ' + name[0].toUpperCase() + "." + surname2[0].toUpperCase() + '.'
}
let result = getFIO ('Kushubekova', 'Aigerim', 'Bakytbekovna')
console.log(result)

function getBooks (listOfBooks){
    const booksWithU =  listOfBooks.filter((i) => i.toLowerCase().includes('у'))
    const allBooks = listOfBooks.filter((i) => !i.toLowerCase().includes('у'))
    console.log(`Книги с У : ${booksWithU}`)
    console.log(`Книги без У : ${allBooks}`)
}

getBooks([' 451 градус по Фаренгейту', ' Три товарища', ' Портрет Дориана Грея', ' Цветы для Элджернона', ' Маленький принц', ' Унесенные ветром', ' Убить пересмешника'])

let information = [
    {name: 'John', dateOfBirth: '04.05.06'},
    {name: 'Oliver', dateOfBirth: '10.12.89'},
    {name: 'Jack', dateOfBirth: '23.08.90'},
    {name: 'Tim', dateOfBirth: '17.03.23'},
    {name: 'Adam', dateOfBirth: '06.07.08'},
    {name: 'Willy', dateOfBirth: '31.07.21'},
    {name: 'Bob', dateOfBirth: '14.06.16'}
]
information.map(item => console.log(`Пользователь: ${item.name} Родился: ${item.dateOfBirth}`))