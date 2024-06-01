const express = require("express");
const app = express();
const port = 3000;

const { Category, Menu } = require("./models");
const { Op } = require("sequelize");

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.findAll();

    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/menus", async (req, res) => {
  try {
    const { title, category } = req.query;
    let option = {
      include: [
        {
          model: Category,
        },
      ],
    };

    if (title) {
      option = {
        ...option,
        where: {
          title: {
            [Op.iLike]: `%${title}%`,
          },
        },
      };
    }

    if (category) {
      option.include = [
        {
          model: Category,
          where: {
            name: {
              [Op.iLike]: `%${category}%`,
            },
          },
        },
      ];
    }

    const menus = await Menu.findAll(option);

    res.json(menus);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/menus/:id", async (req, res) => {
  try {
    const menu = await Menu.findByPk(req.params.id, {
      include: [
        {
          model: Category,
        },
      ],
    });

    if (!menu) return res.status(404).json({ message: "Item not found" });

    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
