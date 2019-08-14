function FizzBuzz () {
for (var i = 1;i <= 100;i++) console.log(
	!(i%15)&&"fizzbuzz"||!(i%5)&&"buzz"||!(i%3)&&"fizz"||i);
}
FizzBuzz ();