export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'teste de api' });
  }
  if (req.method === 'POST') {
    const { name, cpf } = req.body;
    res.status(200).json({ name: name, cpf: cpf });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: 'teste de api' });
  }
};
