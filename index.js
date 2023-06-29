require('dotenv').config();
const app = require('./server/server');

const PORT = process.env.PORT || 3300;

try {
  app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
} catch (error) {
  console.log(error);
}
