/**
 * Website - IQueryService - Interface
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { IQueryable } from './iqueryable';

/********************************************************************************/
/********************************************************************************/

/************************************/
/********** IQUERY SERVICE **********/
/************************************/

export interface IQueryService {
  getAll(): Array<IQueryable>;
  getByID(id: string): IQueryable;
  getBySlug(slug: string): IQueryable;
  getAllAsync(): Promise<Array<IQueryable>>;
  getByIDAsync(id: string): Promise<IQueryable>;
  getBySlugAsync(slug: string): Promise<IQueryable>;
}
