import type { Request, Response } from "express";
export declare const getAllEvents: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const createEvent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getEventById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateEventById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteEventById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=eventController.d.ts.map