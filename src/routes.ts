import { Router } from 'express';
// import { MinhaClasse } from './useCases/...';

const router = Router();

router.get('/cities', (req, res) => {
  console.log('req.query: ', req.query);
  
  return (
    res
    .status(200)
    .json({"goku": "super-sayajin"})
  );
})

export { router };