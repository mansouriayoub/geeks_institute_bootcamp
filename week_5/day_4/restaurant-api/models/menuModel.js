import pool from "../db.js";

const getAllItems = () => {
    return pool.query("SELECT * FROM menu_items");
};

const getItemByName = (name) => {
    return pool.query("SELECT * FROM menu_items WHERE name ilike $1", [name]);
}

const createItem = (name, price) => {
    return pool.query("insert into menu_items (name,price) values ($1,$2) returning *", [name, price]);
}

const updateItem = (id, name, price) => {
    return pool.query("update menu_items set name = $1,  price = $2 where id = $3 returning *", [name, price, id])
}

const deleteItem = (id) => {
    return pool.query("delete from menu_items where id = $1 returning *", [id])
}

export { getAllItems, getItemByName, createItem, updateItem, deleteItem };