/**
 * Website - INavigationItem - Interface
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/**************************************/
/********** INAVIGATION ITEM **********/
/**************************************/

export interface INavigationItem {
  id: string;
  title: string;
  link: string;
  route: string;
  target: string;
  order: number;
  menu: string;
}
