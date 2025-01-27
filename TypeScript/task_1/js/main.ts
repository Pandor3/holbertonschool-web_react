// Ceci va définir l'interface Teacher
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any;
};

// Ceci va définir l'interface Director qui est une extension l'interface Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Ceci va définir l'interface printTeacher pour la fonction du même nom
interface printTeacherfunction {
    (firstName: string, lastName: string): string
}

// Ceci est la fonction printTeacher qui va permettre d'afficher le nom complet.
const printTeacher: printTeacherfunction  = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// Exemple appelé teacher1 qui utilise l'interface Teacher
const teacher1: Teacher = {
    firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  yearsOfExperience: 5,
  contract: false,
};

// Exemple appelé director1 qui utilise l'interface Directors
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    numberOfReports: 17,
  };
  console.log(director1);

// Ceci affichera les informations d'un professeur.
function displayTeacherInfo(teacher: Teacher): void {
    console.log(`
        Nom: ${teacher.firstName}
        Nom de Famille: ${teacher.lastName}
        Employé à plein temps: ${teacher.fullTimeEmployee}
        Adresse: ${teacher.location}
        Années d'expérience: ${teacher.yearsOfExperience}`)

// Ceci va définir les propriétés de base de l'interface
const baseProperties: (keyof Teacher)[] = [
    'firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience'
];

// Ceci va afficher les propriétés dynamiques 
Object.keys(teacher).forEach((key) => {
    if (baseProperties.indexOf(key as keyof Teacher) === -1) {
        console.log(`${key}: ${teacher[key]}`);
        }
    });
}

// Ceci permet de tester avec les données mises dans teacher1
displayTeacherInfo(teacher1);
