const mongoose = require('mongoose');
const productmgr = 'productmgr_db';

mongoose.connect(`mongodb://127.0.0.1/${productmgr}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`${productmgr} connection established`))
    .catch((err) => console.log('cannot establish connection to the database', err));