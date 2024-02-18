import { faker } from "@faker-js/faker"


const generateMistake = (seed, mistakesCount, value) => {
    faker.seed(seed)
    let valueWithMistake = value;

    const mistakeTypes = [
        'deleteSymbol',
        'swapSymbol',
        'addSymbol'
    ]  

    const randomIndex = () => faker.number.int({max: value.length - 1})

    for (let i = 0; i < mistakesCount; i++) {
        const randomChance = faker.number.int({max: 1});
        if (randomChance <= 0.5) {
            const selectedMistakeType = mistakeTypes[faker.number.int({max: mistakeTypes.length - 1})];
            const mistakeIndex = randomIndex();

            switch (selectedMistakeType) {
                case 'deleteSymbol':
                    valueWithMistake = valueWithMistake.slice(0, mistakeIndex) + valueWithMistake.slice(mistakeIndex + 1);
                    break;
                case 'swapSymbol':
                    const swapIndex = randomIndex();
                    const tempChar = valueWithMistake[mistakeIndex];
                    valueWithMistake = valueWithMistake.slice(0, mistakeIndex) + valueWithMistake[swapIndex] + valueWithMistake.slice(mistakeIndex + 1);
                    valueWithMistake = valueWithMistake.slice(0, swapIndex) + tempChar + valueWithMistake.slice(swapIndex + 1);
                    break;
                case 'addSymbol':
                    const randomChar = faker.string.alphanumeric(1);
                    valueWithMistake = valueWithMistake.slice(0, i) + randomChar + valueWithMistake.slice(i);
                    break;
                default:
                    break;
            }
        }
    }

    return valueWithMistake.slice(0, 20)
}

export default generateMistake