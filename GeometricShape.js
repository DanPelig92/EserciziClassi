let GeometricShape = class {

    constructor(nome, tipo, lati, base, altezza) {
        this.nome = nome;
        this.tipo = tipo;
        this.lati = lati;
        this.base = base;
        this.altezza = altezza;
    }

    calculatePerimeter() {
        let perimeter;
        if (this.lati == 4) {
            perimeter = (this.base * 2) + (this.altezza * 2);
        } else { perimeter = "Questo metodo è pensato per quadrati e rettangoli, mi spiace" }
        return perimeter;
    }

    calculateAreas() {
        let area;
        if (this.tipo == "square" || this.tipo == "rectangle") {
            area = this.base * this.altezza
        } else { area = "Questo metodo è pensato per quadrati e rettangoli, mi spiace" }
        return area;
    }

    drawShape() {
        let shape =""
        for (let i = 0; i <= this.base; i++) {
            shape=shape+"_ "
        }
        for (let j=0; j<=this.altezza; j++) {
            console.log(shape);
        }

    }

    compareShapes(s1, s2) {
        if (s1.calculateAreas() > s2.calculateAreas()) {
            return true
        } else {
            return false
        }
    }

    getNome() {
        return this.nome
    }

    getTipo() {
        return this.tipo
    }

    getLati() {
        return this.lati
    }

    getBase() {
        return this.base
    }

    getAltezza() {
        return this.altezza
    }

    setNome(nome) {
        this.nome=nome;
     }

    setTipo(tipo) {
        this.tipo=tipo;
     }

    setLati(lato) {
        this.lati=lato;
     }

    setBase(base) {
        this.base=base;
     }

    setAltezza(altezza) {
        this.altezza=altezza;
     }
}

module.exports = GeometricShape;