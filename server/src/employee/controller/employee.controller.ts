import { Request, Response } from 'express';
import { EmployeeDB } from '../service/employee.db';

export class EmployeeController {
    private employeeService: EmployeeDB;
    constructor(employeeService: EmployeeDB) {
        this.employeeService = employeeService
    }

    getEmployeesByName = async (req: Request, response: Response) => {
        const res = await this.employeeService.getEmployeesByName(req.params.name);
        if (res instanceof Error) {
            return response.status(500).json({ res });
        }
        return response.status(200).json(res);
    };
    getAllCalls = async (_: Request, response: Response) => {
        const res = await this.employeeService.getAllEmployees();
        if (res instanceof Error) {
            return response.status(500).json({ res });
        }
        return response.status(200).json(res);
    };
}