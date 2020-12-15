import minimist from 'minimist';
import fs from 'fs';

const args = minimist(process.argv);

console.log('process.argv', process.argv);
console.log('minimist', args);

const aOptionIndex = process.argv.indexOf('-a');
const aOptionValue = process.argv[aOptionIndex + 1];

console.log('-a', aOptionValue);

//console.log ( 'minimist -a:', args.a );

const txtContent = fs.readFileSync('ToDo.txt').toString();
let todos = txtContent.split('\n');

todos = todos.map((todo) => {
    return todo.split(';');
});

console.log(todos);

//nincs mára tennivalód (function)

function emptylist() {
    const jsonContent = fs.readFileSync('todos.json');
    const jsonTodos = JSON.parse(jsonContent);
    if (emptylist.length === 0){
        console.log('Nincs mára tennivalód :)')
    }
};
emptylist()

//Új tennivaló hozzáadása

let jsonContent = fs.readFileSync('todos.json');
let jsonTodos = JSON.parse(jsonContent);


console.log( jsonTodos );
    //!!!!console.log( jsonTodos[0].name ); 

    //!!!!!jsonTodos[0].name = 'Megetetni a papagájt';


    //!!!!fs.writeFileSync ( 'todos.json', JSON.stringify( jsonTodos ));

//Todo eltávolítása;

function removeTodo() {
   const jsonContent = fs.readFileSync('todos.json');
    let jsonTodos = JSON.parse(jsonContent);

    if (jsonContent.map === false) {
        console.log("Sikeresen eltávolítottad");
    }

    fs.writeFileSync ( 'todos.json', JSON.stringify( jsonTodos ));

};

removeTodo()