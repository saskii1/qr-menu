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
          <div class="row"><strong>${name}</strong><strong>${price}</strong></div>
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
<title>Rusty Bite — Vegan Menu</title>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; background: #f7f4ed; color: #26352b; font: 16px/1.5 Arial, sans-serif; }
  header { padding: 36px 16px; text-align: center; background: #26352b; color: white; }
  h1 { margin: 0; font-size: 42px; }
  header p { margin-bottom: 0; }
  main { max-width: 720px; margin: 24px auto; padding: 0 16px; }
  .notice { padding: 14px; background: #fff0d4; border-left: 5px solid #d28a28; font-weight: bold; }
  section { margin: 28px 0; }
  h2 { color: #526c49; border-bottom: 2px solid #a4b393; padding-bottom: 8px; }
  article { background: white; margin: 12px 0; padding: 16px; border-radius: 9px; }
  .row { display: flex; justify-content: space-between; gap: 12px; }
  article p { margin: 8px 0 0; color: #667066; }
</style>
</head>
<body>
<header><h1>Rusty Bite</h1><p>Vegan menu</p></header>
<main>
  <p class="notice">Please tell staff you are vegan when ordering.</p>
  ${menu}
</main>
</body>
</html>`);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));