/**
 * Website - IWebData - Interface
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */
/*****************************/
/********** IMPORTS **********/
/*****************************/

import { IQueryable } from './iqueryable';

/********************************************************************************/
/********************************************************************************/

/*******************************/
/********** IWEB DATA **********/
/*******************************/

export interface IWebData {
    navigationData: Array<IQueryable>;
    postsData: Array<IQueryable>;
    taxonomiesData: Array<IQueryable>;
    termsData: Array<IQueryable>;
}
