//https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

function solution(a) {
    let index_trees = [];
    let people = [];
    
    for (i=0;i<a.length;i++){
        if (a[i]==-1){
            index_trees.push(i);
        } 
    }
    
    for (i=0;i<a.length;i++){
        if (a[i]!=-1){
            people.push(a[i]);
        } 
    }
    
    let peopleHeights = people.sort(function(a, b) {
      return a - b;
    });
    
    for (i=0;i<index_trees.length;i++){
        peopleHeights.splice(index_trees[i],0,-1);
    }
    return peopleHeights
}    