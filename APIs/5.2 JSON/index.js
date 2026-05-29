import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const loc = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const recipeJSON =
  JSON.parse('[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]');

// console.log(recipeJSON);

app.use(express.static(loc + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(loc + "/views/index.ejs");
});

app.post("/recipe", (req, res) => {

  let dishes = ["chicken", "beef", "fish"];

  let idx = dishes.indexOf(req.body.choice);

  const result = {
    name : recipeJSON[idx].name,
    ingredients : {
      row1 : `${recipeJSON[idx].ingredients.protein.name}, ${recipeJSON[idx].ingredients.protein.preparation}`,
      row2 : `${recipeJSON[idx].ingredients.salsa.name}`,
      row3 : `${recipeJSON[idx].ingredients.toppings[0].quantity} of ${recipeJSON[idx].ingredients.toppings[0].name}`,
      row4 : `${recipeJSON[idx].ingredients.toppings[1].quantity} of ${recipeJSON[idx].ingredients.toppings[1].name}`,
      row5 : `${recipeJSON[idx].ingredients.toppings[2].quantity} of ${recipeJSON[idx].ingredients.toppings[2].name}`
    }
  };
  
  res.render(loc + "/views/index.ejs", {result});
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
