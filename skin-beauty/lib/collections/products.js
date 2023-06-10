import SimpleSchema from 'simpl-schema';

 export const Products = new Mongo.Collection('products');

ProductSchema = new SimpleSchema({
  name: String,

  brandId: String,
  categoryId: String,
  skinTypeId: String,

  imageLink: String,
  ingredients: String
});

Products.attachSchema(ProductSchema);