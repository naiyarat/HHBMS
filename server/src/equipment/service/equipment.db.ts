import { Query } from "mysql2";

export interface EquipmentDB {
    getEquipmentBySerialNumber(serialNumber: string): Promise<Query | Error>;
    getAllEquipment(): Promise<Query | Error>;
}