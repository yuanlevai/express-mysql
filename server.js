const express = require("express");
const app = express();
const { get, create, update, remove } = require("./models/products");

const port = 6000;

//aktifkan json
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.json({message: "OK"})
});


// melihat data product
app.get("/products", async (req, res) => {
    const products = await get();
    res.json(products)
})

// melihat data product berdasarkan id
app.get("/products/:id", async (req, res) => {
    const productId = req.params.id;
    const product = await get(productId);
    res.json(product);
})

// create data product
app.post("/products", async (req, res) => {
    const productData = req.body;
    const insertData = await create(productData);
    res.json(insertData);
})

// update data product
app.put("/products/:id", async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;
    const updateProduct = await update(productData, productId);
    res.json(updateProduct);
})

// hapus data product
app.delete("/products/:id", async (req, res) => {
    const productId = req.params.id;
    const deleteData = await remove(productId);
    res.json(deleteData);
})

app.listen(port, () => {
    console.log(`Server telah berjalan di port ${port}`)
})

