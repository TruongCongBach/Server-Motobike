
exports.up = function(knex) {
  return knex.schema.createTable('motorbikes', (table) => {
      table.increments('id');
      table.string('motorName');
      table.string('registration_tax'); // gia phi truoc ba
      table.string('price'); // gia xe khong
      table.string('price_late_board_number'); // gia lam bien so
      table.string('estimated_rolling'); //gia lan banh

      table.dateTime('created_at');
      table.dateTime('deleted_at');
      table.dateTime('updated_at');
      table.string('created_by');
      table.string('deleted_by');
      table.string('updated_by');

      table.string('manufacturer'); //nha san xuat
      table.integer('manufacturer_id');

      table.json('engine_info'); //dong co
      table.json('efficiency_info'); // hieu xuat
      table.json('details'); // chi tiet

  })
};

exports.down = function(knex) {
  
};
