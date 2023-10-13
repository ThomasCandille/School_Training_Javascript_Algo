//CLASSE AGENT

class agent{

    constructor(name,team,classe){  //construction des agents
        this.name = name            //nom de l'agent
        this.team = team            //attaquant ou defenseur
        this.classe = classe        //classe de l'agent
    }

}


//CREATION DES AGENTS

let names = ["Omen","Phoenix","Jet","Fade","Chamber"]   //noms des agents
let classes = ["smoker","flasher","killer","no","no"]   //roles des agents


//AUTRES VARIABLES UTILES

let winAtt = 0              //nombres de round gagné par les attaquants
let winDef = 0              //nombres de round gagné par les defenseurs
let luckAtt = 0             //chance que les attaquants ont de gagner le duel
let firstAttack = 0         //decide de qui gagne le premier duel
let dead = ""               //permet de savoir quel agent est tué
let nbRound = 0             //nombres de round dans la partie
let spikePlanted = false    //est ce que la spike est plant ou non


//FONCTIONS

//CREATION DE L'EQUIPE DES ATTAQUANT A CHAQUE TOUR
const resetAttackers = () => { 
    let newAttackers = []                                               //on créé une liste vide
    for(let i = 0; i<5; i++){                                           //5 fois
        newAttackers.push(new agent(names[i],"attackers",classes[i]))   //on ajoute les agents de la liste
    }
    return newAttackers
}

//CREATION DE L'EQUIPE DES DÉFENSEURS A CHAQUE TOUR
const resetDefenders = () => {
    let newDefenders = []                                               //on créé une liste vide
    for(let i = 0; i<5; i++){                                           //5 fois
        newDefenders.push(new agent(names[i],"Defenders",classes[i]))   //on ajoute les agents de la liste
    }
    return newDefenders
}


while(winAtt < 13 && winDef < 13){                                                                          //tant que aucune équipe n'a gagné

    let AttackersTeam = resetAttackers()                                                                    //création de l'équipe des attaquants
    let DefendersTeam = resetDefenders()                                                                    //création de l'équipe des defenseurs

    firstAttack = Math.floor(Math.random()*2)                                                               //random pour savoir qui commence

    nbRound++

    if(nbRound%3 == 0 && Math.floor(Math.random()*100 <80)){                                                //verification pour tour de Jett (si round %3 et 80% de chance)

        dead = DefendersTeam.splice([Math.floor(Math.random()*DefendersTeam.length)],1)[0]                  //récupération du nom de l'agent mort + suppression de la liste

        console.log("Jett viens de tuer le defenseur : " + dead.name)                                       //affichage de l'action

    }

    if(firstAttack == 0){                                                                                   //si 0 alors les attaquants attaque

        console.log("Les attaquant attaque en premier !")                                                   //affichage de l'action

        dead = DefendersTeam.splice([Math.floor(Math.random()*DefendersTeam.length)],1)[0]                  //récupération du nom de l'agent mort + suppression de la liste

        console.log("Et c'est fini pour notre defenseur : " + dead.name)                                    //affichage de l'action

        if(Math.floor(Math.random()*100) < 60){                                                             //60% de chance de posé la spike
            
            luckAtt = 70                                                                                    //update de la chance des attaquants en duel
            console.log("Spike has been planted")                                                           //affichage de l'action
            spikePlanted = true                                                                             //update de l'état de la spike
        
        }

        else{
            
            luckAtt = 50                                                                                    //update de la chance des attaquants en duel
            console.log("Spike down Mid")                                                                   //affichage de l'action
            spikePlanted = false                                                                            //update de l'état de la spike

            if(Math.floor(Math.random()*100) < 50){                                                         //verification pour smoke de Omen
            
                console.log("Omen Smoke le site !")                                                         //affichage de l'action
                luckAtt = 60                                                                                //update de la chance des attaquants en duel
            
            }

            if(Math.floor(Math.random()*100) < 50){                                                         //verif flash phoenix (si vivant + 50%)
            
                if(Math.floor(Math.random()*100) < 80){                                                     //verif si ca touche l'ennemi
                    
                    if(spikePlanted == false){                                                              //verif si spike pas plant
                        
                        console.log("Phoenix flax l'ennemi !")                                              //affichage de l'action
                        luckAtt = 60                                                                        //update de la chance des attaquants en duel
                    
                    }
                }
                
                else{
                    
                    console.log("Phoenix rate sa flash !")                                                  //Si il rate sa flash
                    luckAtt = 30                                                                            //update de la chance des attaquants en duel
                
                }
            }
        }
    }

    else{

        console.log("Les defenseurs prennent l'avantage !")                                                 //affichage de l'action
        
        dead = AttackersTeam.splice([Math.floor(Math.random()*AttackersTeam.length)],1)[0]                  //récupération du nom de l'agent mort + suppression de la liste

        console.log("Et c'est fini pour notre attaquant : " + dead.name)                                    //affichage de l'action

        if(Math.floor(Math.random()*100) < 40){                                                             //40% de chance de poser la spike
            
            luckAtt = 70                                                                                    //update de la chance des attaquants en duel
            console.log("Spike has been planted")                                                           //affichage de l'action
            spikePlanted = true                                                                             //update de l'état de la spike
        
        }

        else{
            
            luckAtt = 50                                                                                    //update de la chance des attaquants en duel
            console.log("Spike down Mid")                                                                   //affichage de l'action
            spikePlanted = false                                                                            //update de l'état de la spike

            if(Math.floor(Math.random()*100) < 50){                                                         //verification pour smoke Omen
                
                console.log("Omen Smoke le site !")                                                         //affichage de l'action
                luckAtt = 60                                                                                //update de la chance des attaquants en duel
            
            }

            if(Math.floor(Math.random()*100) < 50){                                                         //verif flash phoenix (si vivant + 50%)
            
                if(Math.floor(Math.random()*100) < 80){                                                     //verif si ca touche l'ennemi
                    
                    if(spikePlanted == false){                                                              //verif si spike pas plant
                        
                        console.log("Phoenix flax l'ennemi !")                                              //affichage de l'action
                        luckAtt = 60                                                                        //update de la chance des attaquants en duel
                    
                    }
                }
                
                else{
                    
                    console.log("Phoenix rate sa flash !")                                                  //Si il rate sa flash
                    luckAtt = 30                                                                            //update de la chance des attaquants en duel
                
                }
            }
        }
    }

    while(DefendersTeam.length > 0 && AttackersTeam.length > 0){                                            //Tant qu'il y a des agents dans les deux équipes                                                                                        

        if(Math.floor(Math.random()*100) < luckAtt){                                                        //Si les attaquants gagne

            dead = DefendersTeam.splice([Math.floor(Math.random()*DefendersTeam.length)],1)[0]              //récupération du nom de l'agent mort + suppression de la liste

            console.log("Et c'est fini pour notre defenseur : " + dead.name)                                //affichage de l'action

        }

        else{                                                                                               //Si les défenseurs gagne

            dead = AttackersTeam.splice([Math.floor(Math.random()*AttackersTeam.length)],1)[0]              //récupération du nom de l'agent mort + suppression de la liste

            console.log("Et c'est fini pour notre attaquant : " + dead.name)                                //affichage de l'action

        }
    }

    if(AttackersTeam.length == 0){                      //Si tous les attaquants sont morts

        winDef++                                        //Un point de plus pour les defenseurs

        console.log("Defenders won the round")          //affichage de l'action

    }

    else{                                               //Si les defenseurs sont morts

        winAtt++                                        //Un point pour les attaquants

        console.log("Attackers won the round")          //Affichage de l'action

    }

}

if(winAtt == 13){                                       //Victoire des attaquants
    console.log("GG les attack")                        //affichage de l'action
}
else{                                                   //Victoire des defenseurs
    console.log("GG les defs")                          //affichage de l'action
}

console.log("Score final " + winAtt + " - " + winDef)   //Affichage des scores