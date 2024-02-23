const express = require("express");
const app = express();

app.get("/pad/:number", (req, res) => {
  const { number } = req.params;
  const paddedNumber = number.toString().padStart(8, " ");

  res.send(`\`${paddedNumber}\``);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
