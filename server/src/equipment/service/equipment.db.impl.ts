import { Query } from "mysql2";
import { executeQuery } from "../../db";
import { EquipmentDB } from "./equipment.db";

export class EquipmentDBImpl implements EquipmentDB {
    async getEquipmentBySerialNumber(serialNumber: string): Promise<Error | Query> {
        const query = 'SELECT * FROM equipment WHERE LOWER(serialNumber) LIKE LOWER(?)';
        try {
            const results = await new Promise<Query>((resolve, reject) => {
                executeQuery(query, function(err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }, [serialNumber]);
            });
            return results;
        } catch (err) {
            throw new Error(`failed to query for equipment. err: ${err}`);
        }
    }
    async getAllEquipment(): Promise<Error | Query> {
        const query = `SELECT * FROM equipment`;
        try {
            const results = await new Promise<Query>((resolve, reject) => {
                executeQuery(query, function(err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });
            return results;
        } catch (err) {
            throw new Error(`failed to query for equipment. err: ${err}`);
        }
    }
}
