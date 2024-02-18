import { faker } from '@faker-js/faker';
import generateRandomPhoneNumber from './generateRandomPhoneNumber.js';
import generateRandomFullName from './generateFakeFullName.js';
import generateRandomAddress from './generateRandomAddress.js';
import generateRandomId from './generateRandomId.js';

const generateFakeData = (region, seed, mistakesCount, fakeDataCount, pageIndex) => {
    const generateData = (seed, index) => {
        const data = {
            index: (pageIndex) * fakeDataCount + index,
            id: generateRandomId(seed + index + (pageIndex) * fakeDataCount),
            fullName: generateRandomFullName(region, seed + index + (pageIndex) * fakeDataCount, mistakesCount),
            address: generateRandomAddress(region, seed + index + (pageIndex) * fakeDataCount, mistakesCount),
            phoneNumber: generateRandomPhoneNumber(region, seed + index + (pageIndex) * fakeDataCount, mistakesCount)
        };
        return data;
    };

    const generateDataList = (count) => {
        const dataList = [];
        for (let i = 0; i < count; i++) {
            const data = generateData(seed, i + 1);
            dataList.push(data);
        }
        return dataList;
    };

    return generateDataList(fakeDataCount);
};


export default generateFakeData;
