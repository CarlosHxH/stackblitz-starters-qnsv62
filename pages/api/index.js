const multer = require('multer');
const jsonServer = require('json-server');
const router = jsonServer.router('db.json');

const upload = multer({ dest: 'uploads/' });

export default (req, res) => {
  const db = router.db;
  const users = db.get('users');
  if (req.method === 'GET') {
    res.status(200).json(users);
  }
  if (req.method === 'POST') {
    //upload.single('file'),
    //(req, res) => {
    const data = req.body;
    //data['file'] = req.file;
    users.push(data).write();
    res.status(200).json({ status: 'success' });
    //};
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: 'teste de api' });
  }
};
