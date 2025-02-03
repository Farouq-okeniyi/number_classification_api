import { Request, Response,NextFunction } from 'express';
import classifyNumber from '../util/classifyNumber';
const userController = async(req:Request,res:Response, next:NextFunction):Promise<any>=>{

  const { number } = req.query;

    if (!number || isNaN(Number(number))) {
        return res.status(400).json({
            number,
            error: true
        });
    }

    const num = Number(number);

    const result = await classifyNumber(num);

    return res.json(result);
    // res.json({
    //     email: "farouqokeniyi2004@gmail.com",
    //     current_datetime: new Date().toISOString(),
    //     github_url: "https://github.com/Farouq-okeniyi/hng12-api-"
    //   });
}
export default userController