const db = require('../data/dbConfig.js');

module.exports = {
    register,
    findBy,
    findById,
    login,
    getUsers
};

async function register (login) {
    const id = await db("logins").insert(login, "id");
    
    return findbyId(id);
};

function findBy (username){
   return db("users").where(username)
};

function findById (id) {
  return db("user")
    .where({id})
    .first()
}

function login (login) {
    return db("logins")
      .insert(login)
};

function getUsers () {
    return db("users")
      .select("*")
      .from("logins")
};