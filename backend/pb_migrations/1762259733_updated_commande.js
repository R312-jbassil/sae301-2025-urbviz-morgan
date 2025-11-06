/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_782564964")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number3257917790",
    "max": null,
    "min": null,
    "name": "total",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2917126107",
    "max": "",
    "min": "",
    "name": "date_commande",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation1888650001",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "IDutilisateur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_340737475",
    "hidden": false,
    "id": "relation2519558698",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "ID_lunette",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_782564964")

  // remove field
  collection.fields.removeById("number3257917790")

  // remove field
  collection.fields.removeById("date2917126107")

  // remove field
  collection.fields.removeById("relation1888650001")

  // remove field
  collection.fields.removeById("relation2519558698")

  return app.save(collection)
})
