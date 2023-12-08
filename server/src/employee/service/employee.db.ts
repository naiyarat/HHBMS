import { Query } from "mysql2";

export interface EmployeeDB {
    getEmployeesByName(name: string): Promise<Query | Error>;
    getAllEmployees(): Promise<Query | Error>;
}