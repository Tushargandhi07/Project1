



for (let i=1;i<=21;i++){
  let count=0;
  for (let j=1;j<=i;j++){
    if(i%j==0){
      count++;
    }
  }

if(count==2){
  console.log(i,"Prime Number");
    
  }else {
  console.log(i,"Not Prime Number" )
  }
}
