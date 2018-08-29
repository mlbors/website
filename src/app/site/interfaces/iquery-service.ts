/**
 * Website - IQueryService - Interface
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Observable } from 'rxjs';

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
  getAllAsync(): Observable<Array<IQueryable>>;
  getByIDAsync(id: string): Observable<IQueryable>;
  getBySlugAsync(slug: string): Observable<IQueryable>;
}
