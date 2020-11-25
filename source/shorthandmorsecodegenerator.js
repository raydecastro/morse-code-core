class ShortHandMorseCodeGenerator {
    constructor() {
        this.dot = ".";
        this.dash = "-";
        this.spaceBetweenSameLetter = "";
        this.spaceBetweenDifferentLetters = " ";
        this.spaceBetweenWords = "  ";
    }

    generateDot() {
        return this.dot;
    }

    generateDash() {
        return this.dash;
    }

    generateSpaceBetweenSameLetter() {
        return this.spaceBetweenSameLetter;
    }

    generateSpaceBetweenDifferentLetters() {
        return this.spaceBetweenDifferentLetters;
    }

    generateSpaceBetweenWords() {
        return this.spaceBetweenWords;
    }

    generateLetter(letter) {
        let letterToMorseCodeToHashTable = {
            "a": ".-"
        };

        return letterToMorseCodeToHashTable[letter.toLowerCase()];
    }
}

export default ShortHandMorseCodeGenerator;
