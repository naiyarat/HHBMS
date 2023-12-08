export type CreateProblemRequest = {
    topic: string;
    description?: string;
    subcategory: number; //FK to subcat
    equipmentSerialNo: string; //FK to equipment
    resolutionTime?: number;
    solution?: string;
    specialist?: number; //FK to specialist
}

export type AddSolution = {
    solution: string;
    id: number;
}

export type EditSubcategory = {
    subcategory: number;
    id: number;
}