exports.up = function(knex, Promise) {
  return knex.schema.createTable("items", table => {
    table.increments();
    table.string("item", 256).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("items");
};
