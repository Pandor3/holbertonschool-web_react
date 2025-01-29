// Ceci nous permet d'implémenter l'interface Teacher
namespace Subjects {
    export class Subject {
        teacher: Teacher;

        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }
        set Teacher(teacher: Teacher) {
            this.teacher = teacher;
        }
        getTeacher(): Teacher {
            return this.teacher;
        }
    }
}
