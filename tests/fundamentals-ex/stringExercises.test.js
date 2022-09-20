import { concatenateStrings, giveAllLettersInUppercase, giveOneLetter, removeWhiteSpaces, replaceFishWords, returnAString, returnHello } from "../../src/fundamentals-ex/stringExercises";

describe('Variables can be a string', () => {
    test.skip('should say Hello', () => {
        /* agrega la línea que falta */
        const word = "Hello";
        expect(returnHello()).toBe('Hello');
    });

    test('should return Hello World', () => {
        /* Modifica la function returnAString del archivo stringExercises */
        const text = "Hello World"
        const result = returnAString();
        expect(result).toBe(text);
    });

    test('should be return I Love JS', () => {
        /* Añade las líneas necesarias al test / Modifica la function concatenateStrings */
        //given
        const text = "I Love JS"
        //When
        const result = concatenateStrings();
        //then
        expect(result).toBe(text);
    });

    test('should return letter g', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveOneLetter para que devuelva la letra g de la variable configurada */
        const text = "g"
        const result = giveOneLetter();

        expect(result).toBe(text);
    });

    test('should return -1', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveTheIndexOfWord */

        expect().toEqual();
    });

    test('should return "Give a Man a Pussy Cat" ', () => {
        const text = "Give a Man a Pussy Cat";
        const result = replaceFishWords()
        expect(result).toBe(text);
    });

    test('should return "RIDE HIM COWBOY"', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveAllLettersInUppercase */
        const text = "RIDE HIM COWBOY";
        const result = giveAllLettersInUppercase();
        expect(result).toBe(text);
    });

    test('should return "Hands Down"', () => {
        /* Añade las líneas necesarias al test y modifica la function removeWhiteSpace */
        const text = "Hands Down";
        const result = removeWhiteSpaces();
        expect(result).toBe(text);
    });
});