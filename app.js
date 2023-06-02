var pronoun = ['the','our','my','your'];
var adj = ['great','big','cool','important','super','amazing','very'];
var noun = ['jogger','racoon','code','tech','geeks', 'store'];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++){
    for(let n = 0; n < noun.length; n++){
      console.log(`${pronoun[p]}${adj[a]}${noun[n]}.com`);
    }
  }
}