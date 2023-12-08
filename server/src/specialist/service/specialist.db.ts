import { Query } from "mysql2";

export interface SpecialistDB {
    getAllSpecialists(): Promise<Query | Error>;
    // assignSubcategory(subcategory: string): Promise<Query | Error>;
}