// const fs = require('fs')
// //fs.writeFileSync('notes.txt', 'Hello there..!!!')
// fs.appendFileSync('notes.txt', ' How uh doin?')

const notes = require('./notes.js')
// const msg = notes()
// console.log(msg)

// const validator = require('validator')
// console.log(validator.isEmail('abc@xyz.com'))
// console.log(validator.isEmail('abc@xyz'))
// console.log(validator.isURL('https://google.com'))
// console.log(validator.isURL('https:/google.com'))

const chalk = require('chalk')
// console.log(chalk.blue.bold('Hello ') + chalk.red.italic.inverse('World') + chalk.green('..!!'))
// console.log(chalk.blue.bgWhite .bold('Hello world!'))

const yargs = require('yargs')
const { argv } = require('yargs')
// console.log(process.argv)

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){ 
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){ 
        notes.readNote(argv.title) 
    }
})
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        notes.listNotes()
    }
})
yargs.parse()