/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // update field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4092494013",
    "hidden": false,
    "id": "relation538919895",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "materiau_monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4092494013",
    "hidden": false,
    "id": "relation210251955",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "materiau_branche",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // update field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4092494013",
    "hidden": false,
    "id": "relation538919895",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "IDmateriaux",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4092494013",
    "hidden": false,
    "id": "relation210251955",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "IDmateriaux_1",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
