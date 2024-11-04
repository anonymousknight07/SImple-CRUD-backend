# Node.js CRUD API

A simple CRUD (Create, Read, Update, Delete) API built with Node.js, Express.js, and MongoDB.

## Features

- RESTful API endpoints for product management
- MongoDB database integration
- MVC (Model-View-Controller) architecture
- Environment variable configuration
- Basic error handling

## Prerequisites

Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community)
- npm (comes with Node.js)

## Project Structure
```
├── controllers
│   └── product.controller.js
├── models
│   └── product.model.js
├── routes
│   └── product.route.js
├── node_modules
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/anonymousknight07/SImple-CRUD-backend.git
```

2. Install dependencies:
```bash

npm install
```

3. Create a `.env` file in the root directory and add your configuration:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your_database_name
```

## Usage

To start the server:
```bash
npm start
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/products | Get all products |
| GET    | /api/products/:id | Get a specific product |
| POST   | /api/products | Create a new product |
| PUT    | /api/products/:id | Update a product |
| DELETE | /api/products/:id | Delete a product |

### Example Request Body (POST/PUT)
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 29.99,
  "category": "Electronics"
}
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Port number for the server | 3000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/your_database_name |

## Development

To run the server in development mode with nodemon:
```bash
npm run dev
```

## Error Handling

The API implements basic error handling for:
- Invalid routes
- Database connection errors
- Validation errors
- Server errors

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Akshat](https://github.com/anonymousknight07?tab=repositories)

## Acknowledgments

- Node.js
- Express.js
- MongoDB
- Mongoose

## Support

For support, email your@email.com or create an issue in this repository.
