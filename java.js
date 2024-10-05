const man1 = {
    age: 20,
    fragrances: ["1 million", "Dior Sauvage", "Viktor&Wolf Spicebomb"], 
sayAge: function() {
    console.log("Man 1 is",this.age);
 }
};

const man2= {
    age: 44,
    fragrances: ["Ultra Male", "Nautica Voyage", "Bleu De Chanel"],
    sayAge: function() {
        console.log("Man 2 is",this.age);
     }
};

const attf = man1.fragrances.concat(man2.fragrances);

console.log("These fragrances are avaliable to trade",attf)

man1.sayAge();
man2.sayAge(); 