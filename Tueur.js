class Killer {

    constructor(name, hp){
        this.name = "Jason"
        this.hp = 100
    }

}

class Survivor{

    constructor(name,stat){
        this.name = name
        this.stat = stat
        this.luckToDie = 30
        this.luckToDamage = 50
        this.luckToDamageAndDie = 20
    }

}

names = ["Jeremy","Michel", "Quentin", "Marianne", "Thomas", "Nicolas","Annam","Alexis","Clara","Lea","Raph","Belka","Ari"]
stats = ["nerd","sportif","blonde","bucheron","unijambiste","aveugle","muet","sourd","psychopathe","perdu","elastique","dur","souple"]

let killer = new Killer()

//let survivor1 = new Survivor(names[Math.floor(Math.random()*names.length)],stats[Math.floor(Math.random()*stats.length)])
//let survivor2 = new Survivor(names[Math.floor(Math.random()*names.length)],stats[Math.floor(Math.random()*stats.length)])
//let survivor3 = new Survivor(names[Math.floor(Math.random()*names.length)],stats[Math.floor(Math.random()*stats.length)])
//let survivor4 = new Survivor(names[Math.floor(Math.random()*names.length)],stats[Math.floor(Math.random()*stats.length)])
//let survivor5 = new Survivor(names[Math.floor(Math.random()*names.length)],stats[Math.floor(Math.random()*stats.length)])

let liDead = []

let liSurvivor = []
for(let i=0; i<5 ; i++){
    liSurvivor.push(new Survivor(names[Math.floor(Math.random()*names.length)],stats[Math.floor(Math.random()*stats.length)]))
}

let actionValue = Math.floor(Math.random() * 101)
let target = 0

while(killer.hp > 0){

        let actorIndex = target%liSurvivor.length
        console.log(actorIndex)
        console.log(liSurvivor)
        let actor = liSurvivor[actorIndex].name

    console.log("au tour de " + actor)

    if(actionValue <= target.luckToDie){
        liDead.push(liSurvivor.splice(actorIndex,actorIndex))
        console.log("Jason a tué" + actor)
    }

    else if(actionValue >= target.luckToDamageAndDie){
        killer.hp -= 10
        console.log(actor + " a equivé et a infligé 10 dmg")
    }

    else{
        liDead.push(liSurvivor.splice(actorIndex,actorIndex))
        killer.hp -= 15
        console.log(actor + "est mort mais il a tapé")
    }

    console.log(liSurvivor)

    target++

    if(killer.hp<=0){
        console.log("Jason et mort")
        console.log("Rip à :")
        liDead.forEach(function(entry) {
            console.log(entry.name);
          })
    }
}