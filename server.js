const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const sections = [
  ["Starters", [
    ["Chips", "£4.50", ""],
    ["Vegetarian Mixed Platter", "£7.45", "Vegetable spring roll, vegetable tempura, samosa and vegetable money bag. Items subject to availability."],
    ["Vegetable Tempura", "£5.95", "Thin slices of mixed vegetables in a light batter, briefly deep-fried, served with sweet chilli sauce."],
    ["Vegetable Spring Rolls", "£5.95", "Rice paper rolls filled with stir-fried glass noodles, carrots, cabbage and mushroom, with sweet chilli sauce."]
  ]],
  ["Side Dishes", [
    ["Stir-Fried Broccoli", "£6.95", "Broccoli stir-fried with soya sauce."],
    ["Stir-Fried Mixed Vegetable", "£6.95", "Mixed vegetables stir-fried with soya sauce."]
  ]],
  ["Noodles", [
    ["Pad Thai", "£9.95", "Stir-fried rice noodles, bean sprouts and spring onions in house sauce. Served with lime and peanuts."],
    ["Pad See Ew", "£9.95", "Stir-fried flat noodles with dark soya sauce, broccoli, green cabbage and carrots."],
    ["Pad Kee Mao Noodle — Spicy", "£9.95", "Stir-fried flat noodles with onions, green beans, red peppers, fresh chilli and basil leaves."],
    ["Singapore Noodle", "£9.95", "Stir-fried thin rice noodles with curry powder, red pepper, bean sprouts and spring onions."]
  ]],
  ["Stir Fries", [
    ["Stir-Fried Chilli & Basil — Spicy", "£9.95", "Medium spice. Fresh chilli, onions, green beans, red peppers and basil leaves."],
    ["Stir-Fried Ginger", "£9.95", "A light dish with ginger, onions, spring onion, carrots, mushrooms and red peppers."],
    ["Stir-Fried Cashew Nut", "£9.95", "A mild stir-fry with cashew nuts, pineapple, red peppers, onions, spring onions, carrots and mushrooms."]
  ]],
  ["Rice Dishes", [
    ["Special Fried Rice", "£9.95", "Fried rice with onions, spring onions, tomatoes and green cabbage. Served with lime and cucumber."],
    ["Khao Pad Kee Mao — Spicy", "£9.95", "Stir-fried rice with chilli and basil, onions, long green beans and red peppers. Served with lime and cucumber."],
    ["Pineapple Fried Rice", "£9.95", "Fried rice with cashew nuts, pineapple, tomatoes, spring onions, onions and red pepper. Served with lime and cucumber."]
  ]]
];

app.get("/", (req, res) => {
  const menu = sections.map(([title, items]) => `
    <section>
      <h2>${title}</h2>
      ${title === "Stir Fries" ? "<p>All stir fries are served with jasmine rice.</p>" : ""}
      ${items.map(([name, price, description]) => `
        <article>
          <div class="row">
            <strong>${name}</strong>
            <strong>${price}</strong>
          </div>
          ${description ? `<p>${description}</p>` : ""}
        </article>
      `).join("")}
    </section>
  `).join("");

  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#173b2b">
  <title>Rusty Bite — Vegan Menu</title>
  <style>
    * { box-sizing: border-box; }

    body {
      margin: 0;
      background: #173b2b;
      color: #f7f0df;
      font: 16px/1.6 Georgia, "Times New Roman", serif;
    }

    header {
      padding: 48px 16px 40px;
      text-align: center;
      background: linear-gradient(145deg, #102c21, #28533b);
      color: #e8c875;
      border-bottom: 2px solid #c9a64b;
    }

    h1 {
      margin: 0;
      font-size: clamp(38px, 8vw, 58px);
      letter-spacing: 2px;
    }

    header p {
      margin: 8px 0 0;
      color: #f7f0df;
      font-style: italic;
      letter-spacing: 1px;
    }

    main {
      max-width: 760px;
      margin: 30px auto;
      padding: 0 18px;
    }

    .notice {
      padding: 16px 18px;
      background: #214a35;
      border: 1px solid #c9a64b;
      border-left: 5px solid #e1bf63;
      border-radius: 8px;
      color: #f3dfa2;
      font-weight: bold;
    }

    section { margin: 34px 0; }

    h2 {
      color: #e8c875;
      border-bottom: 1px solid #c9a64b;
      padding-bottom: 9px;
      font-size: 27px;
      letter-spacing: 1px;
    }

    section > p {
      color: #d7cba9;
      font-style: italic;
    }

    article {
      margin: 13px 0;
      padding: 18px;
      background: #214633;
      border: 1px solid rgba(201, 166, 75, 0.45);
      border-radius: 10px;
      box-shadow: 0 5px 14px rgba(0, 0, 0, 0.16);
    }

    .row {
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    .row strong:first-child { color: #fff9e9; }

    .row strong:last-child {
      color: #e8c875;
      white-space: nowrap;
    }

    article p {
      margin: 9px 0 0;
      color: #d1d9ce;
    }

    @media (max-width: 480px) {
      header { padding: 38px 14px 32px; }
      main { padding: 0 14px; }
      article { padding: 15px; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Rusty Bite</h1>
    <p>Vegan menu</p>
  </header>

  <main>
    <p class="notice">Please tell staff you are vegan when ordering.</p>
    ${menu}
  </main>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
