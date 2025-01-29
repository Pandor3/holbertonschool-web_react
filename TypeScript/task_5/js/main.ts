interface MajorCredits {
    credits: number;
    brand: "MajorCredits";
}

interface MinorCredits {
    credits: number;
    brand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand:"MajorCredits"
    }

}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    }

}

// Tests

// Test 1: Addition de crédits majeurs
const major1: MajorCredits = { credits: 3, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, brand: "MajorCredits" };
const majorSum = sumMajorCredits(major1, major2);
console.log(majorSum); // { credits: 7, brand: "MajorCredits" }

// Test 2: Addition de crédits mineurs
const minor1: MinorCredits = { credits: 2, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 5, brand: "MinorCredits" };
const minorSum = sumMinorCredits(minor1, minor2);
console.log(minorSum); // { credits: 7, brand: "MinorCredits" }
