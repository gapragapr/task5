import { allFakers } from "@faker-js/faker";
import generateMistake from "./generateMistake.js";

const generateRandomAddress = (region, seed, mistakesCount) => {
    const localeFaker = allFakers[region]
    localeFaker.seed(seed)

    const addressValiants = [
        `${localeFaker.location.city()} ${localeFaker.location.streetAddress()}`,
        `${localeFaker.location.city()} ${localeFaker.location.street()} ${localeFaker.location.buildingNumber()}`,
        `${localeFaker.location.zipCode()} ${localeFaker.location.street()}`,
        `${localeFaker.location.streetAddress()}`
    ];

    const selectedAdressVariant = localeFaker.number.int({max: addressValiants.length - 1})

    let result = generateMistake(seed, mistakesCount, addressValiants[selectedAdressVariant])

    return result
}

export default generateRandomAddress