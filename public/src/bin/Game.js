
const cells = [

    {
        name: 'Go',
        cost: null,
        owned: null,
        desc: 'collect $200',
        get: 200,
        img: 'https://preview.ibb.co/catK6x/go.jpg'
    },

    {
        name: 'Mediteranean Avenue',
        cost: 50,
        owned: false,
        desc: 'family restaurant',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },

    {
        name: 'Community Chest',
        cost: null,
        owned: false,
        desc: 'collect the card',
        img: "https://preview.ibb.co/catK6x/go.jpg"     
    },

    {
        name: 'Baltic Avenue',
        cost: 50,
        owned: false,
        desc: 'another restaurant',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'Income Tax',
        cost: null,
        owned: false,
        desc: 'pay 10% or $200',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Reading Railroad',
        cost: 200,
        owned: false,
        desc: 'rail company',
        img: "https://preview.ibb.co/catK6x/go.jpg",

    },
    {
        name: 'Oriental Avenue',
        cost: 100,
        owned: false,
        desc: 'grocery',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'Chance',
        cost: null,
        owned: false,
        desc: 'chance',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'Vermont Avenue',
        cost: 100,
        owned: false,
        desc: 'vermont',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'Connecticut Avenue',
        cost: 120,
        owned: false,
        desc: 'connecticut',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'Jail',
        cost: null,
        owned: false,
        desc: 'jail',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'St Charles Place',
        cost: 140,
        owned: false,
        desc: 'vermont',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'Electric Company',
        cost: 150,
        owned: false,
        desc: 'vermont',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'States Avenue',
        cost: 140,
        owned: false,
        desc: 'states',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Virginia Avenue',
        cost: 160,
        owned: false,
        desc: 'vermont',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Pennsylvania Railroad',
        cost: 200,
        owned: false,
        desc: 'railroad',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'St James Avenue',
        cost: 180,
        owned: false,
        desc: 'st james',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Community Chest',
        cost: false,
        desc: 'community chest',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Tennessee Avenue',
        cost: 180,
        owned: false,
        desc: 'tennessee',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'New York Avenue',
        cost: 200,
        owned: false,
        desc: 'new york',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Free Parking',
        desc: 'parking',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Kentucky Avenue',
        cost: 220,
        owned: false,
        desc: 'kentucky',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Chance',
        desc: 'chance',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Indiana Avenue',
        cost: 220,
        owned: false,
        desc: 'indiana',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Ilinois Avenue',
        cost: 200,
        owned: false,
        desc: 'vermont',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'B & O Railroad',
        cost: 200,
        owned: false,
        desc: 'railroad',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Atlantic Avenue',
        cost: 260,
        owned: false,
        desc: 'atlantic',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Ventnor Avenue',
        cost: 260,
        owned: false,
        desc: 'ventnor',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Waterworks',
        cost: 120,
        owned: false,
        desc: 'waterworks',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Marvin Gardens',
        cost: 280,
        owned: false,
        desc: 'marvin gardens',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Jail',
        desc: 'jail',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Pacific Avenue',
        cost: 300,
        owned: false,
        desc: 'pacific',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'North Carolina Avenue',
        cost: 300,
        owned: false,
        desc: 'north carolina',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Community Chest',
        desc: 'community chest',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Penssylvania Avenue',
        cost: 320,
        owned: false,
        desc: 'pennsylvania',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Short Line',
        cost: 200,
        owned: false,
        desc: 'short line',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Chance',
        desc: 'chance',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Park Place',
        cost: 350,
        owned: false,
        desc: 'park place',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Luxury Tax',
        pay: 75,
        desc: 'pay the $70 tax',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'BoardWalk',
        cost: 400,
        owned: false,
        desc: 'boardwalk',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },

]

const game = () => {

    this.board  =  [{
        name: "Go"
      },{
        name: "Old Kent Road",
        price: 60,
        rental: [2, 10, 30, 90, 160, 250],
        color: "brown",
        housePrice: 50,
        type: "property"
      },{
        name: "Community Chest"
      },{
        name: "Whitechapel Road",
        price: 60,
        rental: [4, 20, 60, 180, 360, 450],
        color: "brown",
        housePrice: 50,
        type: "property"
      },{
        name: "Income Tax",
        type: "tax",
        amount: 200
      },{
        name: "Kings Cross Station",
        price: 200,
        rental: [25, 50, 100, 200],
        type: "station"
      },{
        name: "The Angel, Islington",
        price: 100,
        rental: [6, 30, 90, 270, 400, 550],
        color: "lightBlue",
        housePrice: 50,
        type: "property"
      },{
        name: "Chance"
      },{
        name: "Euston Road",
        price: 100,
        rental: [6, 30, 90, 270, 400, 550],
        color: "lightBlue",
        housePrice: 50,
        type: "property"
      },{
        name: "Pentonville Road",
        price: 120,
        rental: [8, 40, 100, 300, 450, 600],
        color: "lightBlue",
        housePrice: 50,
        type: "property"
      },{
        name: "Jail"
      },{
        name: "Pall Mall",
        price: 140,
        rental: [10, 50, 150, 450, 625, 750],
        color: "pink",
        housePrice: 100,
        type: "property"
      },{
        name: "Electric Company",
        price: 150,
        type: "utility"
      },{
        name: "Whitehall",
        price: 140,
        rental: [10, 50, 150, 450, 625, 750],
        color: "pink",
        housePrice: 100,
        type: "property"
      },{
        name: "Northumberland Avenue",
        price: 160,
        rental: [12, 60, 180, 500, 700, 900],
        color: "pink",
        housePrice: 100,
        type: "property"
      },{
        name: "Marylebone Station",
        price: 200,
        rental: [25, 50, 100, 200],
        type: "station"
      },{
        name: "Bow Steet",
        price: 180,
        rental: [14, 70, 200, 550, 750, 950],
        color: "orange",
        housePrice: 100,
        type: "property"
      },{
        name: "Community Chest"
      },{
        name: "Marlborough Steet",
        price: 180,
        rental: [14, 70, 200, 550, 750, 950],
        color: "orange",
        housePrice: 100,
        type: "property"
      },{
        name: "Vine Steet",
        price: 200,
        rental: [16, 80, 220, 600, 800, 1000],
        color: "orange",
        housePrice: 100,
        type: "property"
      },{
        name: "Free Parking"
      },{
        name: "The Strand",
        price: 220,
        rental: [18, 90, 250, 700, 875, 1050],
        color: "red",
        housePrice: 150,
        type: "property"
      },{
        name: "Chance"
      },{
        name: "Fleet Street",
        price: 220,
        rental: [18, 90, 250, 700, 875, 1050],
        color: "red",
        housePrice: 150,
        type: "property"
      },{
        name: "Trafalgar Square",
        price: 240,
        rental: [20, 100, 300, 750, 925, 1100],
        color: "red",
        housePrice: 150,
        type: "property"
      },{
        name: "Fenchurch Street Station",
        price: 200,
        rental: [25, 50, 100, 200],
        type: "station"
      },{
        name: "Leicester Square",
        price: 260,
        rental: [22, 110, 330, 800, 975, 1150],
        color: "yellow",
        housePrice: 150,
        type: "property"
      },{
        name: "Water Works",
        price: 150,
        type: "utility"
      },{
        name: "Coventry Street",
        price: 260,
        rental: [22, 110, 330, 800, 975, 1150],
        color: "yellow",
        housePrice: 150,
        type: "property"
      },{
        name: "Piccadilly",
        price: 280,
        rental: [22, 120, 360, 850, 1025, 1200],
        color: "yellow",
        housePrice: 140,
        type: "property"
      },{
        name: "Go To Jail",
      },{
        name: "Regent Street",
        price: 300,
        rental: [26, 130, 390, 900, 1100, 1275],
        color: "green",
        housePrice: 200,
        type: "property"
      },{
        name: "Oxford Street",
        price: 300,
        rental: [26, 130, 390, 900, 1100, 1275],
        color: "green",
        housePrice: 200,
        type: "property"
      },{
        name: "Comminity Chest"
      },{
        name: "Bond Street",
        price: 320,
        rental: [28, 150, 450, 1000, 1200, 1400],
        color: "green",
        housePrice: 200,
        type: "property"
      },{
        name: "Liverpool Street Station",
        price: 200,
        rental: [25, 50, 100, 200],
        type: "station"
      },{
        name: "Chance"
      },{
        name: "Park Lane",
        price: 350,
        rental: [35, 175, 500, 1100, 1300, 1500],
        color: "darkBlue",
        housePrice: 200,
        type: "property"
      },{
        name: "Super Tax",
        type: "tax",
        amount: 100
      },{
        name: "Mayfair",
        price: 400,
        rental: [50, 200, 600, 1400, 1700, 2000],
        color: "darkBlue",
        housePrice: 200,
        type: "property"
      }]

    let die1;
    let die2;

    this.rollDice = () => {
        die1 = Math.floor( Math.random() * 6 ) + 1;
        die2 = Math.floor( Math.random() * 6 ) + 1;
    }

    this.buyProperty = (cell, player) => {
        if ( !cell.owned && player.money >= cell.cost ) {
            cell.owned = true;
            player.money - cell.cost;
            player.property.push( cell.name )
        }
    }

}

module.exports = {
    game, 
    cells
}