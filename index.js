require('dotenv').config();

const server = require('./api/server');

server.get('/', (req, res, next) => {
    res.send(`
      <h1>Welcome to my Business Card Organizer server!</h1>
    `);
  });

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`*** Business Card Organizer server listening on port ${PORT} ***`);
});