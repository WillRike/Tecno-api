module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'dbtecno',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
