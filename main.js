const arr = [
    { studentName: 'Bob', favSong: 'Bohemian Rhapsody', favArtist: 'Queen', favGame: 'Tetris' },
    { studentName: 'Roseanne', favSong: 'Baby Shark', favArtist: 'BTOB', favGame: 'Golden Sun' },
    { studentName: 'Jacob', favSong: 'Before I Forget', favArtist: 'Slipknot', favGame: 'Elder Scrolls V: Skyrim' },
    { studentName: "Melissa", favSong: "Warm Me Up", favArtist: "Pierce the Veil", favGame: "Stardew Valley" },
    { studentName: 'Lev', favSong: 'Baby Shark', favArtist: 'Red Morrow', favGame: 'Skyrim' },
    { studentName: "Raimond", favSong: "Thnks fr th Mmrs", favArtist: "Fall Out Boy", favGame: "Elden Ring" },
    { studentName: "LaBronn", favSong: 'Baby Shark', favArtist: 'Janis Joplin', favGame: "Mortal Kombat" },
    { studentName: "Basil", favSong: "Electric Avenue", favArtist: "Lightning Bolt", favGame: "chess" },
    { studentName: 'Trinity', favSong: 'Lofi Beats to Study/Relax To', favArtist: 'K. Flay', favGame: 'Kingdom Hearts' },
]
const apiKey = `9b4V7GqPvj8MtNh9x165FjzGJQvImDzu`;

window.addEventListener('DOMContentLoaded', main);

function main() {
    const form = document.querySelector('form'); //reference form element
    form.addEventListener('submit', findStudent) //add listener to when form submitted




}
/*  psuedocoded event listener
function addEventListener(event, callbackFunc){
  if(event.isHappening){
      callbackFunc(event.info);
  }
}*/

function createCard(image, title, text) {
    let template = `
    <div class="card" style="width: 18rem;">
    <img src="${image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${text}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
    return template;
}

function findStudent(event) {
    event.preventDefault();
    console.log(event.target);
    let formData = new FormData(event.target); //Making the input accessible to js
    let studentObj = Object.fromEntries(formData); //converts form data to object
    let studentDataEl = document.querySelector('.student-data');
    let babySharkGif = 'https://media.giphy.com/media/11Rabl336wzGuk6FTB/giphy.gif'
    const studentArr = [];
    let students = arr.filter(item => item[studentObj.type] === studentObj.search);
    console.log(students);
    if (students.length > 0) {
        for (let student of students) {
            let { studentName, favSong, favGame, favArtist } = student;
                let title = `<strong>Info about ${studentName}</strong>`
                let template = `${studentName} is listening to ${favSong} while playing ${favGame} and is going to go to ${favArtist}'s concert later!`;

                let card = createCard(babySharkGif, title, template)
                 studentArr.push(card);          
        }
        console.log(studentArr);
        studentDataEl.innerHTML = studentArr.join('')
    }

}
/*let type = process.argv[2];
let search = process.argv[3];
console.log(type,search);
findStudent(type,search);*/

