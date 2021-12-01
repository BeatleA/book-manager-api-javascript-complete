const express = require('express');
const { booksController } = require('../controllers');

const router = new express.Router();

/**
 * @swagger
 * /api/v1/books:
 *  get:
 *      summary: Get all books
 *      responses:
 *          200:
 *              description: An array of books
*/
router.get('/books', booksController.getBooks);

/**
 * @swagger
 * /api/v1/books/{bookId}:
 *  get:
 *      summary: Get a single book by bookId
 *      parameters:
 *        - in: path
 *          name: bookId
 *          schema:
 *            type: integer
 *          required: true
 *          description: Numeric ID of the book to get
 *      responses:
 *          200:
 *              description: A single book
*/
router.get('/books/:bookId', booksController.getBook);

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         bookId:
 *           type: integer
 *           description: Auto-generated book id
 *         title:
 *           type: string
 *           description: Book title
 *         author:
 *           type: string
 *           description: Book author
*/

/**
 * @swagger
 * /api/v1/books:
 *  post:
 *      summary: Add a new book
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      responses:
 *        '201':
 *          description: Created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Book'
*/
router.post('/books', booksController.saveBook);

// User Story 4 - Update Book By Id Solution
router.put('/books/:bookId', booksController.updateBook);

module.exports = router;
