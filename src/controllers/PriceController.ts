import axios from "axios";
import { Request, Response } from "express";

class PriceApi {
  async findCoin(req: Request, res: Response) {
    const { coin } = req.params;
    const { data } = await axios(
      `https://economia.awesomeapi.com.br/last/${coin}`
    );
    return res.json(data);
  }
}

export default new PriceApi();
