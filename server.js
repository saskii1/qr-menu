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
