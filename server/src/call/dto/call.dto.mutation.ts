export type CreateCallRequest = {
    caller: number;
    operator: number;
    timeOfCall: Date;
    problem?: number; // check if already have problem
    description?: string;
};

export interface CreateProblemParams {
    topic: string;
    description?: string;
    subcategory: number;
    equipmentSerialNo: string;
    resolutionTime?: number;
    solution?: string;
    specialist?: number;
}

export interface CreateProblemWithId {
    id: number;
}

export type CreateCallWithProblemRequest = {
  caller: number;
  operator: number;
  timeOfCall: Date;
  description?: string;
  problem: CreateProblemParams | CreateProblemWithId;
};