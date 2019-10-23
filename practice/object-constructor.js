function Home(rooms, apartment, color, swimmingPool, state, city) {
    this.rooms = rooms,
    this.apartment = apartment,
    this.color = color,
    this.swimmingPool = swimmingPool,
    this.state = state,
    this.city = city
}
console.log(Home)

var home1 = new Home(2, false, 'yellow', true, 'NV', 'Los Angeles')
console.log(home1)

// Build three more homes

var home2 = new Home(8, true, 'red', false, 'NY', 'Las Vegas')
var home3 = new Home(10, true, 'blue', 2, 'TX', 'Simi Valley')

console.log(home2)
console.log(home3)

var book = {
    author: 'Daniel Cueva',
    size: 'big'
}

function Library(book1, book2, book3, book4, book5) {
    this.book1 = book1
    this.book2 = book2
    this.book3 = book3
    this.book4 = book4
    this.book5 = book5
}
var library1 = new Library('Lords of the Rings', 'BS', 'Tony Robbins', 'Beans Book', 'Red Riding Hood')
var library2 = new Library('Effective', 'Headstrong', 'Contagious', 'Marketing', 'High Book')
var library3 = new Library('Grey', 'Orange', 'White', 'Red', 'Yellow')
var library4 = new Library('Lords of the Rings', 'BS', 'Tony Robbins', 'Beans Book', 'Red Riding Hood')
var library5 = new Library('Lords of the Rings', 'BS', 'Tony Robbins', 'Beans Book', 'Red Riding Hood')
console.log(library1, library2, library3)
