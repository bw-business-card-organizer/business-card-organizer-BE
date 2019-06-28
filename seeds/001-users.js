
exports.seed = function (knex, Promise) {
  return knex('bizUsers').insert([
    {
      "id": 1,
      "email": "jamietheman@hotmail.com",
      "password": "supercool",
      "firstName": "Jamie",
      "lastName": "Jamison",
      "subscription": 3
    },
    {
      "id": 2,
      "email": "samsam@ymail.com",
      "password": "sammysamsam",
      "firstName": "Samantha",
      "lastName": "Sampson",
      "subscription": 2
    },
    {
      "id": 3,
      "email": "computers@computers.com",
      "password": "iheartcomps",
      "firstName": "Bobby",
      "lastName": "Robertson",
      "subscription": 3
    }
  ]);
};
