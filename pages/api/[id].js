export default (req, res) => {
  if (req.method === 'GET') {
    const { name, cpf } = req.body;
    res.status(200).json({ name: 'teste de api' });
  } else {
    res.status(200).json({ name: 'teste de api' });
  }
};
