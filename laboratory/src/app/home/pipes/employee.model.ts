export type EmployeeType = {
  name: string;
  age: number;
  status: keyof typeof StatusType;
  hired: Date;
};

export enum StatusType {
  Active = 'Active',
  Inactive = 'Inactive',
}

export class Employee implements EmployeeType {
  constructor(
    public name: string,
    public age: number,
    public status: keyof typeof StatusType = StatusType[
      StatusType.Active
    ] as keyof typeof StatusType,
    public hired: Date = new Date()
  ) {}
}
