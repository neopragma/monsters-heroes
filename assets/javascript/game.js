let hero1 = new Hero("Rambo", 80, 8, 25, "Stallone");
let monster1 = new Monster("Zandor", 60, 70, 12, "Thingy");

console.log(hero1);
console.log(monster1);



hero1.strike(monster1);
console.log(`${hero1.name}'s health: ${hero1.health}`);
console.log(`${monster1.name}'s health: ${monster1.health}`);

monster1.strike(hero1);
console.log(`${hero1.name}'s health: ${hero1.health}`);
console.log(`${monster1.name}'s health: ${monster1.health}`);

