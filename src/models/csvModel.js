

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
      },
      header_row: {
        type: [Object],
      },
      data_rows: {
        type: [Object],
      },
    }, {
      timestamps: true,
    });
    




const Product = mongoose.model("personaldata",productSchema);
module.exports = Product;