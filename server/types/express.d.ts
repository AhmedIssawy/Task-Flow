// Express type extensions
import { Request, Response, NextFunction } from 'express';

declare module 'express-async-handler' {
  function asyncHandler<T extends Request = Request, U extends Response = Response>(
    fn: (req: T, res: U, next: NextFunction) => Promise<any> | any
  ): (req: T, res: U, next: NextFunction) => void;
  
  export = asyncHandler;
}