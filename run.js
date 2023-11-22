const file = require('./pf2-api-spells-adapted-name and-desc.json');
for (let f of file.list) {
    console.log(f['description'])
}
