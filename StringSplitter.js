let StringSplitter = class {
    constructor(stringToBeSplit) {
        this.stringToBeSplit = stringToBeSplit;
    }

    getSplits(numberOfLetters) {
        let string = this.stringToBeSplit;
        let result = " ";
        for (let i = 0; i <= string.length; i++) {
            if (string.substring(i, i + numberOfLetters).length == numberOfLetters) {
                result = result + string.substring(i, i + numberOfLetters) + " ";

            }
        } return result;
    }

    getAllSplits() {
        let string = this.stringToBeSplit;
        let result = [];
        for (let i = 0; i <= string.length; i++) {
            for (let j = 1; j <= string.length; j++) {
                if (string.substring(i, i + j).length == 0 || result.includes(string.substring(i, i + j))) { } else {
                    result.push(string.substring(i, i + j));
                }

            }
        }
        return result;

    }

    addArrays(array1, array2) {
        let array3 =[]
        for (let i = 0; i <= array1.length; i++) {
        for (let k = 0; k<array2.length; k++) {
            if (array1[i]==array2[k]){
                array3.push(array1[i])}
        }
        } return array3;
    }

}

module.exports = StringSplitter;