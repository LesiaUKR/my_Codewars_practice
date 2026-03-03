
const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
// Expected output: 1

map.set("a", 97);

console.log(map.get("a"));
// Expected output: 97

console.log(map.size);
// Expected output: 3

map.delete("b");

console.log(map.size);
// Expected output: 2


const person1 = {name: 'Max'};
const erson2 = {name: 'Manuel'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10 }]]]);
personData.set(person2, [{date: 'two weeks ago', price: 100 }]);
console.log(personData) // Map(1) { { name: 'Max' } => [ { date: 'yesterday', price: 10 } ] }
console.log(personData.get(person1)) //[ { date: 'yesterday', price: 10 } ]


for(const entry of personData.entries()){
    console.log(entry) //
}

for(const [key, value] of personData.entries()){
    console.log(key, value) //
}

for(const key of personData.keys()){
    console.log(key) //
}

for(const value of personData.values()){
    console.log(value) //
}

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
contact
console.log(contacts.size); // 1


// Setting object properties
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }