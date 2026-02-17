import express from 'express';
import { Request, Response } from 'express';
import { MyType } from './types/index';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Main route
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to my project!');
});

// Example of using a type
const exampleFunction = (data: MyType) => {
    // Logic using the data
};

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});