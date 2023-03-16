db.produtos.updateMany(
  { "valoresNutricionais.2.percentual": { $gte: 40 } },
  { $push: { tags: { $each: ["muito sódio"] } } },
);

db.produtos.find({}, {
  nome: true,
  tags: true,
  _id: false,
});