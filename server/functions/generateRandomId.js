import { faker } from "@faker-js/faker";

const generateRandomId = (seed) => {
    faker.seed(seed)
    return faker.string.uuid()
}

export default generateRandomId