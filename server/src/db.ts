import mysql, { Pool, Query, QueryError } from "mysql2";

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

export const executeQuery = async (query: string, callback?: (err : QueryError | null, results: any) => void, params?: any): Promise<Query>  => {
  return cursor.execute(query, params, callback);
}

export const startTransaction = async (callback: any) => {
  cursor.getConnection((err, connection) => {
    try {
        if (err) {
          console.error('Error creating a connection for transaction: ', err);
          throw err;
        } 
        connection.beginTransaction(async (err) => {
          if (err) {
            console.error('Error in starting transaction: ', err);
            throw err;
          }
          const res = await callback();

          if (res instanceof Error) {
            connection.rollback((err) => {
              if (err) {
                console.error('Error in rolling back transaction: ', err);
                throw err;
              }})
              throw res;
          }

          connection.commit((err) => {
            if (err) {
              console.error('Error in committing transaction: ', err);
              throw err;
            }})
        })
    } catch (err) {
      return err
    } finally {
      connection.release()
    }
  });
};