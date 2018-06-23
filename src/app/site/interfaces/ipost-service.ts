/**
 * Website - IPostService - Interface
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

import { IMetaData } from './imeta-data';
import { IQueryable } from './iqueryable';
import { IQueryService } from './iquery-service';

/********************************************************************************/
/********************************************************************************/

/***********************************/
/********** IPOST SERVICE **********/
/***********************************/

export interface IPostService {
  taxonomyService: IQueryService;

  getMeta(id?: string, slug?: string): Array<IMetaData>;
  getMetaAsync(id?: string, slug?: string): Observable<Array<IMetaData>>;
  getAllByCriteria(criteria: object): Observable<Array<IQueryable>>;
  getAllByType(typeSlug: string): Observable<Array<IQueryable>>;
}
