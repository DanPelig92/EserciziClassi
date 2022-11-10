let Student = class {
    constructor(name, surname, birthdate, hobby, motto) {
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.hobby = hobby;
        this.motto = motto;
    }
    getMotto() {
        console.log("Il motto di " + this.name + " è: " + this.motto)
    }
    getAge() {
        let age = (2022 - this.birthdate);
        console.log("l'etá di " + this.name + " " + this.surname + " è: " + age);
        return age;
    }

    compareAge(ageS2) {
        let age = this.getAge()
        if (age > ageS2) {
            return true;
        }
        else {
            return false;
        }
    }

    getHobby() {
        console.log("l'hobby di " + this.name + " " + this.surname + " è: " + this.hobby);
        return this.hobby;
    }

    haveSameHobby(hobby2) {
        if (this.hobby == hobby2) {

            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = Student;