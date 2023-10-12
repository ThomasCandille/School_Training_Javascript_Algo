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
        this.luckToDie = 20
        this.luckToDamage = 60
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
let actor = 0
let actorIndex = 0
let survivor = liSurvivor[0]

while(killer.hp > 0){

    if(liSurvivor.length > 0){
        actorIndex = target%liSurvivor.length
        survivor = liSurvivor[actorIndex]
        actor = survivor.name
        actionValue = Math.floor(Math.random() * 101)
        console.log(actionValue)
    }
    else{
        console.log("tous mort :/")
        break
    }

    console.log("au tour de " + actor)

    
    if(actionValue <= survivor.luckToDie){
        liDead.push(liSurvivor.splice(actorIndex,1)[0])
        console.log("Jason a tué" + actor)
    }

    else if(actionValue > survivor.luckToDie && actionValue < survivor.luckToDie+survivor.luckToDamage){
        killer.hp -= 10
        console.log(actor + " a equivé et a infligé 10 dmg")
    }

    else if(actionValue >= survivor.luckToDie+survivor.luckToDamage){
        liDead.push(liSurvivor.splice(actorIndex,1)[0])
        killer.hp -= 15
        console.log(actor + "est mort mais il a tapé")
    }

    target++

    if(killer.hp<=0){
        console.log("Jason et mort")
        console.log("Rip à :")
        liDead.map((element) => console.log(element.name))
    }
    
}