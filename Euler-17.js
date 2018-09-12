function num2str(num){
  var output = new Array;
  if( num < 20){
    switch (num) {
      case 1:
        output.push("one");
        break;
      case 2:
        output.push("two");
        break;
      case 3:
        output.push("three");
        break;
      case 4:
        output.push("four");
        break;
      case 5:
        output.push("five");
        break;
      case 6:
        output.push("six");
        break;
      case 7:
        output.push("seven");
        break;
      case 8:
        output.push("eight");
        break;
      case 9:
        output.push("nine");
        break;
      case 10:
        output.push("ten");
        break;
      case 11:
        output.push("eleven");
        break;
      case 12:
        output.push("twelve");
        break;
      case 13:
        output.push("thirteen");
        break;
      case 14:
        output.push("fourteen");
        break;
      case 15:
        output.push("fifteen");
        break;
      case 16:
        output.push("sixteen");
        break;
      case 17:
        output.push("seventeen");
        break;
      case 18:
        output.push("eighteen");
        break;
      case 19:
        output.push("nineteen");
        break;
      default:
        output.push("");
    }
  }
  if( 20 <= num && num < 30 )
    output.push( "twenty" );
  if( 30 <= num && num < 40 )
    output.push( "thirty" );
  if( 40 <= num && num < 50 )
    output.push( "forty" );
  if( 50 <= num && num < 60 )
    output.push( "fifty" );
  if( 60 <= num && num < 70 )
    output.push( "sixty" );
  if( 70 <= num && num < 80 )
    output.push( "seventy" );
  if( 80 <= num && num < 90 )
    output.push( "eighty" );
  if( 90 <= num && num < 100 )
    output.push( "ninety" );
  if( 20 <= num && num < 100 && num % 10 )
    output = output.concat( num2str( num % 10 ) );
  if( 100 <= num && num < 1000 )
    output = output.concat( num2str( ( num - num % 100 ) / 100 ), "hundred" );
  if( ( 100 <= num && num < 1000 ) && num % 100 )
    output = output.concat( "and", num2str( num % 100 ) );

  if( 1000 <= num && num < 1000000 )
    output = output.concat( num2str( ( num - num % 1000 ) / 1000 ), "thousand" );
  if( ( 1000 <= num && num < 1000000 ) && num % 1000 )
    output = output.concat( "and", num2str( num % 1000 ) );

  if( 1000000 <= num && num < 1000000000 )
    output = output.concat( num2str( ( num - num % 1000000 ) / 1000000 ), "million" );
  if( ( 1000000 <= num && num < 1000000000 ) && num % 1000000 )
    output = output.concat( "and", num2str( num % 1000000 ) );

  if( 1000000000 <= num && num < 1000000000000 )
    output = output.concat( num2str( ( num - num % 1000000000 ) / 1000000000 ), "billion" );
  if( ( 1000000000 <= num && num < 1000000000000 ) && num % 1000000000 )
    output = output.concat( "and", num2str( num % 1000000000 ) );

  if( 1000000000000 <= num && num < 1000000000000000 )
    output = output.concat( num2str( ( num - num % 1000000000000 ) / 1000000000000 ), "trillion" );
  if( ( 1000000000000 <= num && num < 1000000000000000 ) && num % 1000000000000 )
    output = output.concat( "and", num2str( num % 1000000000000 ) );

  if( 1000000000000000 <= num && num < 1000000000000000000 )
    output = output.concat( num2str( ( num - num % 1000000000000000 ) / 1000000000000000 ), "quadrillion" );
  if( ( 1000000000000000 <= num && num < 1000000000000000000 ) && num % 1000000000000000 )
    output = output.concat( "and", num2str( num % 1000000000000000 ) );

  if( 1000000000000000000 <= num && num < 1000000000000000000000 )
    output = output.concat( num2str( ( num - num % 1000000000000000000 ) / 1000000000000000000 ), "quintillion" );
  if( ( 1000000000000000000 <= num && num < 1000000000000000000000 ) && num % 1000000000000000000 )
    output = output.concat( "and", num2str( num % 1000000000000000000 ) );

  return output;
}

var ans = new Array();
var num = 1000;
for( var i = 1; i <= num; i++)
  ans = ans.concat( num2str( i ) );
ans.join("").length;
