import { PROBLEMSTATUS } from "@src/constant";

export interface Problem {
    id: string;
    topic: string;
    description?: string;
    subcategory: string; //FK
    equipmentSerialNo: string; //FK
    resolutionTime: Date; //FK
    solution: string; //FK
    status: PROBLEMSTATUS; //FK
    specialist: string;
}