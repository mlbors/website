/**
 * Website - IPostService - Interface
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { IMetaData } from './imeta-data';
import { IQueryService } from './iquery-service';

/********************************************************************************/
/********************************************************************************/

/***********************************/
/********** IPOST SERVICE **********/
/***********************************/

export interface IPostService {
  taxonomyService: IQueryService;

  getMeta(id?: string, slug?: string): Array<IMetaData>;
  getMetaAsync(id?: string, slug?: string): Promise<Array<IMetaData>>;
}
