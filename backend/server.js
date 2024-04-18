const index = require('./index');
const app = index.app;
const port = 3001;

app.listen(port, () => {
    console.log(`Server running on http://localhostL:${port}`);
})