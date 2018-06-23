/**
 * Website - IDataService - Interface
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

import { IWebData } from './iweb-data';

/********************************************************************************/
/********************************************************************************/

/***********************************/
/********** IDATA SERVICE **********/
/***********************************/

export interface IDataService {
    getData(): Observable<IWebData>;
}
