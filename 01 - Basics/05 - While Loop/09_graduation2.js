function graduation2(input) {
    let name = input[0];
    let gradeTotal = 0;
    let years = 1;
    let expelled = 0;
    let yearExpelled = 0;
    let i = 1;

    while (years <= 12) {
        let grade = Number(input[i]);
        i++;

        if (grade < 4) {
            expelled++;

            if (expelled >= 2) {
                yearExpelled += years;
                break;
            } else {
                continue;
            }
        }

        gradeTotal += grade;
        years++;
    }

    if (expelled >= 2) {
        console.log(`${name} has been excluded at ${yearExpelled} grade`);
    } else {
        let averageGrade = gradeTotal / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation2(['Mimi', 5, 6, 5, 6, 5, 6, 6, 2, 3]);