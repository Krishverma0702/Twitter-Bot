import { createConnection } from 'mysql2';

const connection = createConnection({
  host: 'your_host',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database'
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

// perform database queries here

connection.end();