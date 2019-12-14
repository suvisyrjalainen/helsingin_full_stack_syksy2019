const Pool = require('pg').Pool
const pool = new Pool({
  user: 'suvi',
  host: 'localhost',
  database: 'helsinki_leffadata_api',
  password: 'password',
  port: 5432,
})

const haeArvostelut = (request, response) => {
  pool.query('SELECT * FROM leffat ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const luoArvostelu = (request, response) => {
  const { leffa, arvostelu, arvostelija } = request.body

  pool.query('INSERT INTO leffat (leffa, arvostelu, arvostelija) VALUES ($1, $2, $3)', [leffa, arvostelu, arvostelija], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Kaikki Ok`)
  })
}

module.exports = {
  haeArvostelut,
  luoArvostelu,
}
