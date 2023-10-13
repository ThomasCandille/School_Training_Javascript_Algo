//DECLARATION CLASSE
    
class Personnage {

    constructor(name, mentalHealth){
        this.name = name
        this.mentalHealth = mentalHealth
    }

}

//DECLARATION VARIABLE

const radio = [
    "Anissa",
    "MinecraftOST",
    "SuperMarioGalaxyTheme",
    "GODS",
    "CeSoirEnVille"]

let trajet = 30

let Thomas = new Personnage("Tommahs", 10)

let taxiNumber = 1

//BOUCLE D'EXECUTION

while(trajet > 0){

    console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_")
    console.log(Thomas.name + "arrive a un feu rouge ! Il en reste " + trajet) //nb de feu restant

    let playingSong = radio[Math.floor(Math.random()*radio.length)] //son a la radio

    if(playingSong == "Anissa"){ //si anissa -> sanity -1 / sinon tout va bien

        Thomas.mentalHealth -= 1
        console.log("NOOOON PAS CAAAAA")
        console.log("wejdene passe a la radio et " + Thomas.name + " craque... Il lui reste " + Thomas.mentalHealth + " de santé mentale")

        if(Thomas.mentalHealth == 0){ //si sante mental au plus bas -> changement taxi 

            taxiNumber++
            Thomas.mentalHealth = 10
            console.log("Thomas explose de rage, il pars dans un autre taxi pour se calmer...")
            console.log(taxiNumber + " taxi on été pris")

        }
    }

    else{

        console.log(playingSong + " passe a la radio, tant mieux pour nos oreilles :)")

    }

    trajet--

    console.log("il reste encore " + trajet + " feu rouge")
}

console.log("Au final " + Thomas.name + " aura du prendre " + taxiNumber + " Taxi")