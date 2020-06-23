const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter(note => note.title === title)
    const duplicateNotes = notes.find(note => note.title === title)

    debugger

    if(duplicateNotes === undefined){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note Added Successfully..!!'))
    }
    else{
        console.log(chalk.red.inverse('Note Title Taken..!!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notestoKeep = notes.filter(note => note.title !== title)
    if(notestoKeep.length !== notes.length)
    {
        saveNotes(notestoKeep)
        console.log(chalk.green.inverse('Note Removed Successfully..!!'))
    }
    else
        console.log(chalk.red.inverse('Note Not Found..!!'))
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes:- '))

    notes.forEach(note => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const notetoRead = notes.find(note => note.title === title)

    if(notetoRead){
        console.log(chalk.blue.inverse('Title:- '+notetoRead.title))
        console.log(chalk.white.inverse('Body:- '+notetoRead.body))
    }
    else{
        console.log(chalk.red.inverse('Note Not Found..!!'))
    }
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('Notes.json', data)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(error){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}