import IBook from '@/interfaces/IBook';

import { IGetAllService } from './IGetAllService';
import { IGetOneService } from './IGetOneService';
import { IDeleteService } from './IDeleteService';
import { IUpdateService } from './IUpdateService';
import { ICreateService } from './ICreateService';

export interface IBookService extends 
IGetAllService, 
IGetOneService<number>, 
ICreateService<IBook, IBook>, 
IUpdateService<IBook, IBook>, 
IDeleteService<number> {}