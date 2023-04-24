//https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32

function solution(s1, s2) {
       let count = 0;
       
       for (i=0;i<s1.length;i++){
              if (s2.indexOf(s1[i])!=-1){
                      count++;
                      s2 = s2.replace(s1[i],'');
                  }
       }
       return count
}