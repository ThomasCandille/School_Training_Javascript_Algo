
//DEFINITION DE LA CLASSE KILLER 

class Killer {

    constructor(){
        this.name = "Jason"
        this.hp = 100
    }

}

//DEFINITION DES SURVIVANTS

class Survivor{

    constructor(name,stat,luckToDie,luckToDamage,luckToDamageAndDie){
        this.name = name                                //son nom
        this.stat = stat                                //sa stat
        this.luckToDie = luckToDie                      //chance de mourir face a Jason
        this.luckToDamage = luckToDamage                //chance d'esquiver et de faire des dégats
        this.luckToDamageAndDie = luckToDamageAndDie    //chance de mourir mais faire des dégats
    }

}

//GENERATION DES VALEURS DE CHANCE DES SURVIVANTS

const RandomVal = () => {

    let li = []                                     //init d'une liste

    for(let i = 0; i < 3; i++){                     //on ajoute trois valeurs comprise entre 0 et 99
        li.push(Math.floor(Math.random()*100))
    }

    while(li[0]+li[1]+li[2] != 100){                //tant que la somme de la liste != 100

        if(li[0]+li[1]+li[2]>100){                  //si au dessus de 100
            li[Math.floor(Math.random()*3)]--       //on baisse une des valeurs de la liste de 1
        }

        else{                                       //sinon
            li[Math.floor(Math.random()*3)]++       //on augmente une des valeurs de 1
        }
    }

    return li                                       //on renvoie la liste
}

//DEFINITION DES NOMS ET STATS POSSIBLES

names = ["Jeremy","Michel", "Quentin", "Marianne", "Thomas", "Nicolas","Annam","Alexis","Clara","Lea","Raph","Belka","Ari"]
stats = ["nerd","sportif","blonde","bucheron","unijambiste","aveugle","muet","sourd","psychopathe","perdu","elastique","dur","souple"]

//CREATION DU TUEUR

let killer = new Killer()

//CREATION DES SURVIVANTS

let liSurvivor = []                 //Liste des survivants
for(let i=0; i<5 ; i++){            //Pour 5 survivants
    let Values = RandomVal()        //on récupere les chances de mourir - faire des degats - les deux
    liSurvivor.push(new Survivor(names[Math.floor(Math.random()*names.length)],stats[Math.floor(Math.random()*stats.length)],Values[0],Values[1],Values[2]))
                                    //Assignation des valeurs toutes en aléatoire
}

//CREATION DE LA LISTE DES MORTS

let liDead = []    

//DEFINITION DE VARIABLES UTILES

let actionValue = Math.floor(Math.random() * 101)   //VALEUR ENTRE 0 ET 100 POUR CONNAITRE L4ACTION
let target = 0                                      //UTILE POUR L'INDEX DE LA CIBLE DANS LA LISTE DES SURVIVANTS
let actor = 0                                       //NOM DU SUURIVANT A QUI C'EST LE TOUR
let actorIndex = 0                                  //INDEX DU SURVIVANT
let survivor = liSurvivor[0]                        //INIT DU SURVIVANT A QUI C'EST LE TOUR

while(killer.hp > 0){                                   //tant que le tueur n'est pas mort

    if(liSurvivor.length > 0){                          //tant qu'il y a des survivants vivants
        actorIndex = target%liSurvivor.length           //on recupere l'index du survivant dans la liste liSurvivor
        survivor = liSurvivor[actorIndex]               //on recupere le survivant en question
        actor = survivor.name                           //on recupere le nom du survivant
        actionValue = Math.floor(Math.random() * 101)   //valeur random pour decider de l'action
    }
    
    else{                                               //sinon
        console.log("Tous les survivants sont mort :(") //tout le monde est mort
        break                                           //fin de la boucle
    }

    console.log("au tour de " + actor)

    
    if(actionValue <= survivor.luckToDie){              //si la valeur correspond a la chance de mourir
        liDead.push(liSurvivor.splice(actorIndex,1)[0]) //le survivant est retiré de la liste des vivants et placé dans la liste des morts
        console.log("Jason a tué" + actor)
    }

    else if(actionValue > survivor.luckToDie && actionValue < survivor.luckToDie+survivor.luckToDamage){ //si la valeur correspond a la chance d'esquivé
        killer.hp -= 10                                 //le tueur perd 10 pv
        console.log(actor + " a equivé et a infligé 10 dmg / Son nombre de pts de vie restant est de : " + killer.hp)
    }

    else if(actionValue >= survivor.luckToDie+survivor.luckToDamage){ //si la valeur correspond a mourir mais faire des dégats
        liDead.push(liSurvivor.splice(actorIndex,1)[0]) //le survivant est retiré de la liste des vivants et placé dans la liste des morts
        killer.hp -= 15                                 //le tueur perd 15hp
        console.log(actor + "est mort mais a infligé 15 dégats / Jason n'a plus que " + killer.hp)
    }

    console.log("----------------------------------")

    target++                                            //on passe au survivant suivant

    if(killer.hp<=0){                                       //si le tueur est mort
        console.log("Jason et mort")                        
        console.log("Rip à :")
        liDead.map((element) => console.log(element.name))  //affichage des noms des survivants morts
    }
    
}