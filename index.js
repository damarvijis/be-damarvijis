const app = require('./app');
const PORT =  process.argv[3] || 8080

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});