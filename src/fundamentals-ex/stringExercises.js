export function returnHello()
{

}

export function returnAString()
{
    /* Completa la function */
    return "Hello World"
}

export function concatenateStrings()
{
    /* Completa la function */
    const firstWord = 'I';
    const secondWord = 'Love';

    //const phrase = firstWord +" "+ " " + secondWord + " " + 'JS';
    const phrase = `${firstWord} ${secondWord} JS`
    return phrase
    
}

export function giveOneLetter()
{
    /* Completa la function */ 
    const dog = 'dog';
    const slice = dog.slice(2)
    return slice

}

export function giveTheIndexOfWord()
{
    const wordToSearch = 'Butterfly';
    const phrase = "Once upon a time!!!";
    
}

export function replaceFishWords()
{
    let phrase = 'Give a Man a Fish';
    const remplace = phrase.replace("Fish","Pussy Cat")
    return remplace;
}

export function giveAllLettersInUppercase()
{
    let phrase = 'Ride Him Cowboy';
    const upperCase = phrase.toLocaleUpperCase();
    return upperCase;
}

export function removeWhiteSpaces()
{
    let phrase = '    Hands Down    ';
    const trim = phrase.trim(" ")
    return trim;
}