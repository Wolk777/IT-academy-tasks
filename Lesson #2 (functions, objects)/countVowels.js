function countVowelLetters(str) {
var strVowels = 'аоиеёэыуюяАОИЕЁЭЫУЮЯ';
var pos = 0;
var counter = 0;
while (str[pos]) {
	(strVowels.indexOf(str[pos]) >= 0 && counter++); 
	pos++;
}
return console.log('Количество гласных = ' + counter);
}

countVowelLetters('Пришла зима, запахло…');
countVowelLetters('Ghbdtn, z r dfv bp Hjccbb');
countVowelLetters('длинношеее');