import mysql, { Pool, Query } from "mysql2"

let cursor: Pool;

export const connectSql = () => {
    cursor = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'mydb'
    });
    cursor.getConnection((err, connection) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          return err;
        } else {
          console.log('Connected to the database');
          connection.release();
        }
    });
}

export const executeQuery = async (query: string, params?: any): Promise<Query>  => {
  return cursor.execute(query, params);
}