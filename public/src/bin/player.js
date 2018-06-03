function Player(piece, name, color) {
    this.cell = 0;
    this.name = name;
    this.piece = piece;
    this.color = color;
    this.money = 1500;
    this.inJail = false;
    this.property = [];
    this.getOutOfJail = 0;
    this.turn = 0;
    this.position = 0;
}

module.exports = {
    Player
}