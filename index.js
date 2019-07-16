const Koa = require('koa');
const app = new Koa();
const knexFile = require('./database/knexfile');
const qb = require('knex')(knexFile.development);


qb.select().table('table_name').then(res => {
    console.log(res);

});
app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000);
