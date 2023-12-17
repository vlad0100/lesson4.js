/*let name1 = "Mesterul";
function funcname(name1){
    console.log("Hello ", name1);
}
funcname(name1);
*/

/*let human = {
    fullname: "Ion loh",
    age: 16,
    email: "ionloh123@gmail.com",
    adress: "strada Mesterul Manoli"
};

let cat = {
    age: 2,
    Name: "Ionio",
    live: "strada losara.com",
    color: "Xbox Series S/X, Pink Edition"
}

cat.age = 2.5;

console.log(human, cat);*/

//                                                       elementele/functii -> object -> clasa
//exemplu:

/*class human{
    let organe = {
        inima: "Pompeaza sange",
        Creier: "Coordoneaza"

    }
    function eat(){
        console.log("eu mananc");
    }
    age: 124124;
};*/

/*let n = {
    info: "Ion ii loh",
    display(parametru){
        console.log(this.info, parametru);
    }
};

n.display("Text");*/

let phone = {
    brand: "Xiaomi",
    color: "Gray",
    procesor: "Snapdragon 772G",
    camera: 108,
    ac_dc: "este",

    turnon(){
        console.log(this.brand, "se porneste");
    },
    discharge(){
        console.log("Telefonul se descarca");
    },
    call(){
        console.log("Eu pot suna");
    },
    photo(){
        console.log("Eu fac poze in 4K rezolutie cu culori aprinse si vapse eu is cikipibarum", this.camera);
    }

}

console.log(phone.brand,",", phone.color,",", phone.procesor);
phone.turnon();
phone.photo();
phone.call();
phone.discharge();

class cat{
    constructor(name, age){
        this.name = name; 
        this.age = age;
    }
    ceaipitie(cat1, cat2){
        console.log(cat1, "a venit la", cat2, "sa beie ceai si el caroci so transformat in rial sikma si el caroci amuia nu mai este faik sikma engine six point faif da vapseta ion ii ghei")
    }
}

let ion = new cat("ion", 2);
let mester = new cat("mester", 3);
ion.ceaipitie(mester.name, ion.name);
mester.ceaipitie(ion.name, mester.name);