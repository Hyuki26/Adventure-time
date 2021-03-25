function start() {
    var txt;
    var person = prompt('Name:','Fairy');
    if (person = null || person == ""){
        txt = 'Byee!';
        } else { 
        let Welcome = 'Hello' + person + 'Welcome to wonderland!🌟';
        }
        document.getElementById('demo').innerHTML;
   }

function apple(){
   switch ('Would you like some apple?'){
       case 'Yes':
           break;
        case 'No':
            break;
        default:
   }
}

//choose character random
function Characters(){
    var Characters = [Pegasus, Mermaid, Dragon, Unicorn];
    var random = Math.floor(Math.random()*Characters.length);
        console.log(random, Characters[random]);
} 
  
      
     let Pegasus = ['tornado', 'wind', 'typhoon'];
        for (let i = 0; i < Pegasus.length; i++) {
             let item = Pegasus[i];
             console.log(i);
             console.log(item);
             if (item === 'wild'){
                 break;
             } else {
                 console.log('dead');
             }
        }
    let Mermaid = ['splash', 'wave', 'tsunami'];
        for (let i = 0; i < Mermaid.length; i++){
             let item = Mermaid[i];
            console.log(i);
            console.log(item);
             if (item === 'wild'){
                 break;
             } else {
                 console.log('gone');
             }
        }
            
       
    let Dragon = ['fireball', 'flame thrower','napalm'];
        for (let i = 0; i < Dragon.length; i++){
             let item = Dragon[i];
            console.log(i);
            console.log(item);
             if (item === 'wild'){
                 break;
             } else {
                 console.log('destroyed');
             }
        }
        

    let Unicorn = ['Strangled', 'rose whip', 'poison'];
        for (let i = 0; i < Unicorn.length; i++){
             let item = Unicorn[i];
            console.log(i);
            console.log(item);
             if (item === 'wild'){
                 break;
             } else {
                 console.log('vanished')
             }
        }
        
    //get hit more than 3 times, terminated.
    let x = 0;
        
        console.log('terminated')
        while (x > 3){
            console.log(x);
            x++
        };

    
  let Pegasus = 25;
  let Mermaid = 25;
  let Dragon = 25;
  let Unicorn = 25;

  if (Pegasus > "Mermaid + Dragon + Unicorn"){
        console.log("Pegasus the WINNER!");
  } else if 
     (Mermaid > "Dragon + Unicorn + Pegasus"){
         console.log("Mermaid the WINNER!!");
     } else if
     (Dragon > "Unicorn + Pegasus + Mermaid"){
         console.log("Dragon the WINNER!");
     } else 
     (Unicorn > "Pegasus + Mermaid + Dragon");
         console.log("Unicorn the WINNER!")
