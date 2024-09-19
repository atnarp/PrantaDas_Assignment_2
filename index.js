// Task 1
function calculateDifference(a, b) {
    return a - b;
}

// Task 2
function isOdd(num) {
    return num % 2 !== 0;
}

// Task 3
function findMin(numbers) {
    return Math.min(...numbers);
}

// Task 4
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// Task 5
function sortArrayDescending(numbers) {
    return numbers.sort((a, b) => b - a);
}

// Task 6
function lowercaseFirstLetter(str) {
    if (!str) return str; 
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// Task 7
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Task 8
function findAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}
