/**
 * Website - IMenu - Interface
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { INavigationItem } from './inavigation-item';

/********************************************************************************/
/********************************************************************************/

/***************************/
/********** IMENU **********/
/***************************/

export interface IMenu {
  id: string;
  slug: string;
  name: string;
  items: Array<INavigationItem>;
}
