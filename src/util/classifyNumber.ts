import axios from "axios";

const isPrime = (num: number): boolean => {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) return false;
    }
    return true;
};

const isPerfect = (num: number): boolean => {
    let sum = 1;

    for (let i = 2; i * i <= num; i++) {

        if (num % i === 0) {

            sum += i;

            if (i !== num / i) sum += num / i;

        }
    }
    return sum === num && num !== 1;
};

const isArmstrong = (num: number): boolean => {
    const digits = num.toString().split("").map(Number);

    const sum = digits.reduce((acc, d) => acc + Math.pow(d, digits.length), 0);

    return sum === num;
};

const getDigitSum = (num: number): number => {
    return num.toString().split("").reduce((acc, d) => acc + Number(d), 0);

};

const getFunFact = async (num: number): Promise<string> => {
    try {

        const response = await axios.get(`http://numbersapi.com/${num}/math`);

        return response.data;

    } catch (error) {
        return "No fun fact available at the moment.";
    }
};

const classifyNumber = async (num: number) => {
    const properties: string[] = [];

    if (isArmstrong(num)) properties.push("armstrong");
    
    properties.push(num % 2 === 0 ? "even" : "odd");

    return {
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties,
        digit_sum: getDigitSum(num),
        fun_fact: await getFunFact(num)
    };
};

export default classifyNumber;
