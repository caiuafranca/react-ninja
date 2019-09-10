const connStr = "Server=localhost; Database=portal_noticias; User Id=sa; Password='@Admin123+';";
const sql = require ('mssql');

sql.connect(connStr).then(conn => console.log('Conectou corretamente')).catch(err =>(console.log('Error de Conexão')))