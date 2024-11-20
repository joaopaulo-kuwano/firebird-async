import { it, expect } from 'vitest'
import { FirebirdAsync } from '.'
import dotenv from 'dotenv'
dotenv.config()

it ('deve conectar no db e executar query de exemplo', async () => {

  const api = await FirebirdAsync.query(`SELECT FIRST 1 * FROM VENDAS`, [], {
    host: process.env.DATABASE_HOST || '',
    blobAsText: process.env.DATABASE_BLOB_AS_TEXT === 'true' || false,
    pageSize: parseInt( process.env.DATABASE_PAGE_SIZE as string ) || 4096,
    database: process.env.DATABASE_PATH || '',
    port: parseInt( process.env.DATABASE_PORT as string ) || 3055,
    password: process.env.DATABASE_PASS || '',
    user: process.env.DATABASE_USER || '',
  })

  expect(api.data.length).toBe(1)
  expect(api.error).toBeFalsy()

})
