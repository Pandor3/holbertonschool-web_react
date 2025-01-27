// Ceci est l'interface définie en tant que Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Ceci définit les données de student1
const student1: Student = {
    firstName: "Somebody",
    lastName: "Once",
    age: 42,
    location: "USA"
};

// Ceci définit les données de student2
const student2: Student = {
    firstName: "Told",
    lastName: "me",
    age: 45,
    location: "United States"
};

// Ceci est un tableau avec les données de student1 et student2
const studentsList: Student[] = [student1, student2];

// Ceci va permettre de créer et d'afficher la table.
document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");
    
    // Ceci permet de créer une entête pour le tableau
    const headerRow = document.createElement("tr");
    const headers = ["First Name", "Location"];

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    tableHead.appendChild(headerRow);

    // Ceci permet d'ajouter les données des étudiants
    studentsList.forEach(student => {
        const row = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;

        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });

    table.appendChild(tableHead);
    table.appendChild(tableBody);
    document.body.appendChild(table);
});
