const app = require('./app');
const PORT =  process.argv[2] || 8080

app.listen(PORT, () => {
    console.log("New Workflow")
    console.log(`Server listening on port ${PORT}`);
});