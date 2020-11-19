export class ceshi {
    constructor(value) {
        this.v = value
    }
    init (value) {
        if (value) {
            console.log(value)
        } else {
            console.log('null')
        }
    }
    num () {
        this.v ++
        this.init (this.v)
        return this.v
    }
    less () {
        this.v --
        this.init (this.v)
        return this.v
    }
}
