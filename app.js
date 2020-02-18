const phraseOneArray = [
	{
		phraseOne : `As I drip red wine. `
	},
	{
		phraseOne : `At once I lept. `
	},
	{
		phraseOne : `The void called. `
	},
	{
		phraseOne : `I treat my enemies. `
	},
	{
		phraseOne : `Today was colder than yesterday. `
	},
	{
		phraseOne : `Break all before you. `
	}
];
console.log('hello world');
const phraseTwoArray = [
	{
		phraseTwo : ` Pregnant with blood.`
	},
	{
		phraseTwo : ` Distaste.`
	},
	{
		phraseTwo : `All will weep.`
	},
	{
		phraseTwo : ` Wine into my womb.`
	},
	{
		phraseTwo : ` A bleak nuance.`
	},
	{
		phraseTwo : ` After the blood moon.`
	}
];

const poemBtn = document.querySelector('.poemBtn');
const poetryGen = document.querySelector('.poetryGen');
const poetryGenTwo = document.querySelector('.poetryGenTwo');
const phraseOne = document.querySelector('.phraseOne');
const phraseTwo = document.querySelector('.phraseTwo');

poemBtn.addEventListener('click', displayphraseStart);

function displayphraseStart() {
	let number = Math.floor(Math.random() * phraseOneArray.length);
	let numberTwo = Math.floor(Math.random() * phraseTwoArray.length);
	poetryGen.innerHTML = phraseOneArray[number].phraseOne;
	poetryGenTwo.innerHTML = phraseTwoArray[numberTwo].phraseTwo;
}
