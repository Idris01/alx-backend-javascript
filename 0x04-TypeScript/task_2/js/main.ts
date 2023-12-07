interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak?: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak?: () => string;
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getToWork(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string) {
  if ((typeof(salary) === "number") && (salary < 500)) {
   return new Teacher();
 } else {
   return new Director();
   }
}

function isDirector(employee: Teacher | Director) {
  return (employee instanceof Director);
}

function executeWork(employee: Teacher | Director) {
  if (employee instanceof Teacher) return employee.workTeacherTasks();
  else return employee.workDirectorTasks();
}

