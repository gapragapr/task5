import { allFakers } from "@faker-js/faker";
import generateMistake from './generateMistake.js'

const generateRandomPhoneNumber = (region, seed, mistakesCount) => {
    const localeFaker = allFakers[region]
    localeFaker.seed(seed)

    const formatedVariants = [
        "+#-###-###-##-##",
        "###########",
        "#(###)#######",
        "# (###) ### ## ##",
        "#-(###)-###-##-##",
        "+#.(###).###.##.##"
    ]

    const selectedFormat = formatedVariants[localeFaker.number.int({max: formatedVariants.length - 1})]

    let result = generateMistake(seed, mistakesCount, localeFaker.phone.number(selectedFormat))
    
    return result

    
}

export default generateRandomPhoneNumber
