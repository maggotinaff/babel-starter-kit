import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2c', (req, res) => {
  const userError = 'Invalid username';
  const removeText = (str, substr, index) => {
    let arr = str.split(substr);
    if (arr.length > 1) {
      return arr[index];
    }
    return str;
  }

  const getUsername = (username = userError) => {
    username = removeText(username, '.com/', 1);
    username = removeText(username, '.xn--p1ai/', 1);
    username = removeText(username, '?', 0);
    username = removeText(username, '@', 1);
    username = removeText(username, '/', 0);
    return username === userError ? userError : `@${username}`;
  }

  res.send(getUsername(req.query.username));
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
