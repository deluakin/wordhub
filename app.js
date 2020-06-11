const fs = require('fs');
const path = require('path');

findWords = (word) => {
    if(word.trim().length < 3)
        return;
    
    let wordLen = word.length
    let lowerCaseWord = word.toLowerCase();
    
    const wordArray = fs.readFileSync(path.join(__dirname, "words.txt"), 'utf8').split('\n');
    let foundWords = wordArray.filter((possibleWord) => {
        if(possibleWord.length <= wordLen){
            let indexes = []
            for(var i=0; i<possibleWord.length; i++){
                let char = possibleWord.charAt(i);
                let foundChar = false
                let searchIndex = -1
                while(!foundChar){
                    foundChar = true
                    searchIndex = findCharacterIndex(lowerCaseWord, char, searchIndex+1)
                    if(searchIndex === -1)
                        return false
                    
                    if(!indexes.includes(searchIndex))
                        indexes.push(searchIndex);
                    else
                        foundChar = false;
                }
            }

            return true;
        }
    })

    return foundWords
}

findCharacterIndex = (word, character, startIndex) => word.indexOf(character, startIndex)

const args = process.argv.slice(2)
if(args.length > 0){
    console.log(findWords(args[0]))
}

module.exports = {
    findWords
}