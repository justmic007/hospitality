import express from 'express';

import queries from './queries';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const beds = await queries.getAllBeds();

    return res.status(200).json(beds);

  } catch (error) {

    res.status(500).json({ error: 'Internal Server Error' });

  }

});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const bed = await queries.getBedById(id);

    if (bed.length < 1) {

      return res.status(404).json({ message: 'Not Found' });

    } else {

      return res.status(200).json(bed);
    }
  } catch (error) {

    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export default router;

// getBook: async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Books.findBookBy(id);
//     if (book) {
//       const reviews = await Books.getBookReviews(id);
//       book.averageRatings = ratingsAverage(reviews);
//       book.reviews = reviews;
//     } else {
//       res.status(404).json({ error: 'This book does not exist' });
//     }
//     res.status(200).json(book);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }