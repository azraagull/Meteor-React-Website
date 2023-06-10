import { SkinTypes } from "../../lib/collections/skinTypes";

Migrations.add({
  version: 3,
  name: "Created SkinType",
  up: function () {
    const skinTypes = JSON.parse(Assets.getText("seeds/skinTypes.json"));
    skinTypes.forEach((skinType) => {
      SkinTypes.insert(skinType);
    });
  },
});
