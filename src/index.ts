import util from 'node:util'
import Firebird from 'node-firebird'

interface Connection {
  host?: string,
  port?: number,
  database?: string,
  user?: string
  password?: string
  blobAsText?: boolean
  pageSize?: number
}

export class FirebirdAsync {

  public instance = Firebird

  public static async query<T>(string_query: string, params: any[], connection: Connection): Promise<{ error: any, data: T[] }> {
    try {
      const pool = Firebird.pool(5, {
        host: connection.host,
        port: connection.port,
        database: connection.database,
        user: connection.user,
        password: connection.password,
        blobAsText: connection.blobAsText,
        lowercase_keys: false,
        pageSize: connection.pageSize,
        encoding: 'UTF8',
        retryConnectionInterval: 1000
      })

      const getAsync = util.promisify(pool.get.bind(pool));
      const db2 = await getAsync()
      const queryAsync2 = util.promisify(db2.query.bind(db2))
      const result = await queryAsync2(string_query, params)
      return { error: null, data: result as T[] }
    } catch (err) {
      return { error: err, data: [] }
    }
  }
}
