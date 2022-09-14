  




             

  
  





     //------------************------------check-\/-palindrome------------***********------------//
                              
  					
				  	let Enter_Number=787;

                              
       //----------******-------------------------\/---------------------******-----------//



























//----------------------------------------------------
let revnum=0;
let check_palindrome=Enter_Number;
while(Enter_Number>0){
  num=Enter_Number%10;
  num=Enter_Number%10;
  revnum=revnum*10+num;
  Enter_Number=Math.floor (Enter_Number/10);
}if (check_palindrome==revnum){
  console.log("Yes");
}else{
  console.log("No")
}
