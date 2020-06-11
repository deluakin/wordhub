const words = require("word-list-json");

findWords = (word) => {
    if(word.trim().length < 3)
        return;
    
    let wordLen = word.length
    let lowerCaseWord = word.toLowerCase();
    
    let foundWords = words.filter((possibleWord) => {
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
}

findCharacterIndex = (word, character, startIndex) => word.indexOf(character, startIndex)


module.export = findWords