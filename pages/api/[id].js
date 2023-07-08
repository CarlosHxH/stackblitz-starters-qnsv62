//var mysql = require('mysql');
/*
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'my_db',
});
*/
//connection.connect();
export default (req, res) => {
  if (req.method === 'GET') {
    const { id } = req.query;
    const data = [];

    /*connection.query('SELECT * FROM pessoa', function (error, results, fields) {
      if (error) throw error;
      data = results[0].solution;
      console.log('The solution is: ', results[0].solution);
    });*/

    res.status(200).json(data);
  } else {
    res.status(200).json({ name: 'erro' });
  }
};
//connection.end();
