import express, { Request, Response } from "express";
import { testUtils } from "utils/utils";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world123456!",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    testUtils();
    console.log("server started at http://localhost:" + PORT);
  });
}

export default app;
