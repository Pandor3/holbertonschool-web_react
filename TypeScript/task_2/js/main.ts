interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from Home"    
    };

    getCoffeeBreak(): string {
        return "Getting a coffee break"
    };

    workDirectorTasks(): string {
        return "Getting to director tasks"
    };
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    };

    getCoffeeBreak(): string {
        return "Cannot have a break"
    };

    workTeacherTasks(): string {
        return "Getting to work"
    };
}

function createEmployee(salary: number) {
    if (salary < 500) {
        return { salary, string: "Teacher"};
    } 
    return { salary, string: "Director"};
}
