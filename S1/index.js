/* Crear proyecto de node
npm init

Intalar dependencias "Librerias"
npm i [nombre de la dependencia]

Ejecutar pryecto de ndoe
node [nombre del archivo js]
*/




var cowsay = require("cowsay");
console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));

const fortune = require('fortune') // Works in web browsers, too.
 
const store = fortune({
  user: {
    name: String,
 
    // Following and followers are inversely related (many-to-many).
    following: [ Array('user'), 'followers' ],
    followers: [ Array('user'), 'following' ],
 
    // Many-to-one relationship of user posts to post author.
    posts: [ Array('post'), 'author' ]
  },
  post: {
    message: String,
 
    // One-to-many relationship of post author to user posts.
    author: [ 'user', 'posts' ]
  }
})

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// ES2015 tagged template literal
log(chalk`
CPU: {red ${cpu.totalPercent}%}
RAM: {green ${ram.used / ram.total * 100}%}
DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));