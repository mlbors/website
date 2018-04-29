/**
 * Website - IQuerierComponent - Interface
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { IQueryService } from './iquery-service';

/********************************************************************************/
/********************************************************************************/

/****************************************/
/********** IQUERIER COMPONENT **********/
/****************************************/

export interface IQuerierComponent {
  queryService: IQueryService;
}
