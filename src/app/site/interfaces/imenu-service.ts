/**
 * Website - IMenuService - Interface
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

/***********************************/
/********** IMENU SERVICE **********/
/***********************************/

export interface IMenuService {
    getByIDObservable(id: string): Observable<IQueryable>;
    getBySlugObservale(slug: string): Observable<IQueryable>;

}
