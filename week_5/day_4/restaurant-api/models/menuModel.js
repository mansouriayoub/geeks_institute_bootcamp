import pool from "../db.js";

const getAllItems = async () => {
   
        const result = await pool.query('select * from menu_items');
        return result.rows
                                                                                      
}

const getItemByName = async (name) =>{
   
        const result = await pool.query('select * from menu_items where item_name = $1', [name])
        return result.rows;

}

const createItem = async(name, price)=>{
   
        const result = await pool.query('insert into menu_items(item_name,item_price) values($1,$2) returning *', [name,price])
        return result.rows

}

const updateItem = async (id, name, price)=>{
   
        const result = await pool.query('update menu_items set item_name=$1, item_price=$2 where item_id=$3 returning *', [name, price, id])
        return result.rows;

}

const deleteItem = async (id)=>{
   
        const result = await pool.query('delete from menu_items where item_id = $1 returning *', [id])
        return result.rows;

}

export { getAllItems, getItemByName, createItem, updateItem, deleteItem }