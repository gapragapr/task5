import { allFakers } from "@faker-js/faker";
import generateMistake from "./generateMistake.js";

const generateRandomFullName = (region, seed, mistakesCount) => {
    const localeFaker = allFakers[region]
    localeFaker.seed(seed)

    let result = generateMistake(seed, mistakesCount, localeFaker.person.fullName())

    return result
}

export default generateRandomFullName