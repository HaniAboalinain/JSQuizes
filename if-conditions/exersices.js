/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  
function num(first,second)
{
if (first>second)
	console.log(first);
else
	console.log(second);
}

num(8,5);

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
 function number(first)
{

	if(first >= 0)
		return "this is positive number"+first;

	else
		return "this is negative number"+first;
}

alert(number(-5));

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  function number(num1,num2,num3)
{

	if(num1 > num2 && num1 > num3 && num2>num3 )
	{
	if(num2>num3) 
		return num1+","+num2+","+num3;

		else 
			return num1+" "+num3+" "+num2
	}


	else if(num2 > num3 && num2 > num1) 
		{ 
			if(num3>num1)
			return num2+","+num3+","+num1;
       
		else 
			return num2 +","+num1+","+num3;

       }

	else if(num3 > num1 && num3 > num2) 
	{
		if (num2>num1)
			return 
			num3+","+num2+","+num1;
			else
		return
		 num3+","+num1+","+num2;

	}
}

alert(number(17,15,17));
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  function number(num1,num2,num3,num4,num5,largest)
{

	if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5)
	{	largest = num1;
		return largest;
	}
	else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 )
	{	largest = num2;
		return largest;
	}
	else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 )
	{	largest = num3;
		return largest;
	}
	else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5 )
	{	largest = num4;
		return largest;
	}
	else if(num5 > num1 && num5 > num2 && num5 > num3 && num5 >  num4 )
	{	largest = num5;
		return largest;
	}
}

alert(number(-5,-2,5,0,-1));

 /******* End Your Code ********* */

 /* 5.Fix the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  

function num(x,y)
{

if (x>y)
	return "Hello world";
else
	return "Goodbye";

}

alert(num(5,7));



 /******* End Your Code ********* */


/*write the if statement to display "Hello World" if x is greater than y.*/
/******* Start Your Code *********/
  function num(x,y)
{

if (x>y)
	return "Hello world";
else
	return "nothing";

}

alert(num(5,7));
 /******* End Your Code ********* */


