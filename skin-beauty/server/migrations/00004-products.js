import { Brands } from "../../lib/collections/brands"
import { Categories } from "../../lib/collections/categories"
import { Products } from "../../lib/collections/products";
import { SkinTypes } from "../../lib/collections/skinTypes"

Migrations.add({
  version: 4,
  name: "Created Product",
  up: function () {
    const products = JSON.parse(Assets.getText("seeds/products.json"));
    products.forEach((product) => {

      const category = Categories.findOne({title: product.category})
      const brand = Brands.findOne({title: product.brand})
      const skinType = SkinTypes.findOne({title: product.skinType})

      const obj = {
        name:product.name,
        imageLink:product.imageLink,
        ingredients:product.ingredients,
        categoryId: category?._id,
        brandId: brand?._id,
        skinTypeId: skinType?._id
      }

      try {
        Products.insert(obj);
      } catch (error) {
        console.log(product);
      }

    });
  },
});
