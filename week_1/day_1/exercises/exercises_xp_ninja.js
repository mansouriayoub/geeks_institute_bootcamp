// ===== Exercise 1
const person1 = {
    FullName: 'Ali Man',
    mass: 77,
    height: 1.80,
    calculBmi: function () {
        return this.mass / (this.height * this.height);
    }
}

const person2 = {
    FullName: 'Jamal Rafi',
    mass: 66,
    height: 1.90,
    calculBmi: function () {
        return this.mass / (this.height * this.height);
    }
}

const comparePersonBmi = () => {

    let person1Bmi = person1.calculBmi().toFixed(2)
    let person2Bmi = person2.calculBmi().toFixed(2)

    if (person1Bmi > person2Bmi) {

        console.log(`${person1.FullName} has the highest BMI of ${person1Bmi}`);

    } else {

        console.log(`${person2.FullName} has the highest BMI of ${person2Bmi}`);

    }
}

comparePersonBmi()

// ===== Exercise 2

const findAvg = (gradesList) => {
    let sum = 0;

    let gradesListLength = gradesList.length;

    for (let i = 0; i < gradesListLength; i++) {
        sum += gradesList[i];

    }
    let theAverage = sum / gradesListLength;

    return theAverage;

}

const checkAverageSixtyFive = (gradesList) => {

    const average = findAvg(gradesList);

    console.log(average);


    if (average >= 65) {

        console.log(`Passed`);

    } else {

        console.log(`Failed and must repeat the course`);

    }

}
checkAverageSixtyFive([85, 90, 78, 92]);


