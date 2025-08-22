import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

console.log("Starting Express Server...");


app.get("/", (req, res) => {
  res.send({ message: "Assalamvalaikum" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
