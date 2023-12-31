interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  contract: boolean;
  }

interface Directors extends Teacher {
  numberOfReports: number;
  }
  
interface printTeacherFunction {
  firstName: string;
  lastName: string;
  }
 
export function printTeacher(firstName:string, lastName:string):string {
  return `${firstName[0]}. ${lastName}`;
  }

  
export class StudentClass{
  firstName:string;
  lastName:string;

  constructor(firstName:string, lastName:string) {
    this.firstName=firstName;
    this.lastName=lastName;
  }

  workOnHomework():string {
    return 'Currently working';
  }

  displayName():string {
    return this.firstName;
  }
}
