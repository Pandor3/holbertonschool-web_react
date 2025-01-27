interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Somebody",
    lastName: "Once",
    age: 42,
    location: "USA"
};

const student2: Student = {
    firstName: "Told",
    lastName: "me",
    age: 45,
    location: "United States"
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const headers = ["First Name", "Location"];

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    tableHead.appendChild(headerRow);

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
