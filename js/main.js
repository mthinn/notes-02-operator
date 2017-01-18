/* all programming languages come with a set of operators. the following are basic math operators. */

/* this is the addition and subtraction operators at work. */
var addone = 38;
var addtwo = 12;
var addfinal = addone + addtwo;

document.write('<br>' + addfinal);

var subone = 89;
var subtwo = 43;
var subfinal = subone - subtwo;

document.write('<br>' + subfinal);

/* this the multiplication and division operators at work. */
var mutione = 34;
var mutitwo = 2;
var mutifinal = mutione * mutitwo;

document.write('<br>' + mutifinal);

var divone = 52;
var divtwo = 2;
var divfinal = divone / divtwo;

document.write('<br>' + divfinal);

/* modulus, also known as 'remainder' in javascript, is math operation that returns or gives you the remainder of a division operation. modulus is often used to determine if a set of numbers is equal to something. */
var modone = 16;
var modtwo = 5;
var modfinal = modone % modtwo;

document.write('<br>' + modfinal);

var modthree = 9;
var modfour = 5;
var modfinal2 = modthree % modfour;

document.write('<br>' + modfinal2);

/* in programming languages, you should never divide by zero. this will result in error, that can oftentimes break your program and sometimes even crash your browser or your computer. */

/* incrementer and decrementers are used to add one or subtract one from a value. these are most often used in loops. */
var incA =3;
document.write('<br>starting number:' + incA);
incA++; // adds one to incA
document.write('<br>incremented' + incA)

/* the incermenter is replacing += 1. which adds 1 to the above variables */

var decA = 6;
document.write('<br>starting number:' + decA);
decA--; // subtract one form decA
document.write('<br>decremented:' + decA);

/* the decimeter is replacing -= 1. which subtracts 1 from the above variable. */

/* the most commonly use operator in programming, is the assignment operator. it is donated with an equal sign (=). the assignment operator assign a value to object. */
var assignthis = 'this strinig is assign to assignthis veriable';
document.write('<br>' + assignthis);



/* the == operator is the comparition operator. it determines if two pieces of data share the same value. */
var a = 4;
var b = 4;
if (a == b) {
	// do something.
	document.write('<br> they\'re equal!');
};









/* the != and the !== operator are used to determine if two valuse are not equel. */
var e = 'happy';
var f = 'sad';
if (e != f) {
	// do somthing.
	document.write('<br> these values are not the same');
}

 var g = 90;
 var h = '78';
 if (g !== h) {
 	document.write('<br> these values and types are not the same')

 }
/* less than(<) and greater than(>) operators. these test to determine if one value is less than or greater than the other. */
var i = 3;
var j = 9 ;
if (i > j){
    document.write('<br> i is less than');

}
/* the less than or equal to (<=) and greater than or equal to (>=) operators are also used to determine values. this time, they take into consideration if the values are equal to one  another. */
var k = 89;
var l = 89;
if ( k >= l) {
     document.write('<br> the k values is greater than or equal to l');
};


/* the && 'and' operator tiers two two elements together. */
var m = 45;
var n = 45;
var o = 45;
if (m == n && m == o){
     document.write('<br> m is equal to both n and o');
}

/* the || 'or' operator compares two elements to each other. it accepts a true evaluation if one or the other is not */
var p = 89;
var q = 77;
var r = 89;
if (p == q || p == r){
    document.write('<br> p is either equal to q or equal to r');

}
/* prompt() is a javascript method run on the window object that asks a user for input. */
var yourname = prompt('please enter your name', 'ex. john smith');

if (yourname == 'james bond'){
	document.write('<br> welcome, 007');
} else {
	document.write('<br> oh hello ' + yourname +'.');
}

var yourscore = prompt('please enter a score from 1 - 100');
if (yourscore >= 50){
     document.write('<br> congratulations you passed');
} else {
	document.write('<br> to bad you failed');
}
















