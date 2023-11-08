const env = process.env;

console.log('Creating user ' + env.MONGO_INITDB_USERNAME);

const user = db.createUser({
    user: env.MONGO_INITDB_USERNAME,
    pwd: env.MONGO_INITDB_PASSWORD,
    roles: [ { role: "readWrite", db: env.MONGO_INITDB_DATABASE } ],
    passwordDigestor: "server",
});

console.log('Created', user);
