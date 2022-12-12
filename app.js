const SpaceShip = {
  fuel: 400,
  emptyTank: false,
  Passengers: ["John", "Steve", "Sam", "Danielle"],
  Shields: true,
  Speedometer: 0,
  newPassenger: "",
  position: 0,
  listPassengers: function () {
    let i = 0;
    while (i < this.Passengers.length) {
      console.log("Passenger " + (i + 1) + ":" + this.Passengers[i]);
      i++;
    }
  },
  addPassenger: function (newPassenger) {
    this.Passengers.push(newPassenger);
    console.log(newPassenger + " was added to the ship");
  },

  checkFuel: function () {
    if (0 < this.fuel < 30 && this.Shields == true) {
      console.log("fuel is low, turning off shields...");
      this.Shields = false;
    } else if (this.fuel == 0 && this.emptyTank == true) {
      console.log("can't go further, tank is empty");
    } else {
      //console.log('Something else');
    }
  },

  travel: function (distance) {
    console.log("trying to travel: " + distance);
    this.checkFuel();
    if (distance <= this.fuel * 2) {
      this.fuel = this.fuel - distance / 2;
      this.position = this.position += distance;
      console.log("the Spaceship is at: " + this.position);
      console.log("the spaceship has: " + this.fuel + " fuel");
    } else if (distance > this.fuel * 2 && this.emptyTank == false) {
      console.log("can only travel: " + this.Speedometer);
      this.distance = this.fuel * 2;
      this.position = this.position + this.fuel * 2;
      console.log("the Spaceship is at: " + this.position);
      this.fuel = 0;
      console.log("the spaceship has: 0 fuel");
      this.emptyTank = true;
    } else {
      //console.log('Something else');
    }

    this.Speedometer = this.fuel * 2;
    //console.log('the spaceship can travel: ' + this.Speedometer);
  },
};

SpaceShip.listPassengers();
SpaceShip.addPassenger("Lindsay");
SpaceShip.listPassengers();
SpaceShip.travel(750);
SpaceShip.travel(200);
SpaceShip.travel(100);
