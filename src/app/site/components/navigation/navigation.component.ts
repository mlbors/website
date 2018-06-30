/**
 * Website - Navigation Component - Component
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	  -
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Component, Input, OnInit } from '@angular/core';

import { IMenu } from '../../interfaces/imenu';
import { IMenuService } from '../../interfaces/imenu-service';
import { INavigationItem } from '../../interfaces/inavigation-item';
import { IQuerierComponent } from '../../interfaces/iquerier-component';
import { IQueryService } from '../../interfaces/iquery-service';

import { MenuService } from '../../services/menu.service';

/********************************************************************************/
/********************************************************************************/

/*******************************/
/********** COMPONENT **********/
/*******************************/

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [ MenuService ]
})

/********************************************************************************/
/********************************************************************************/

/******************************************/
/********** NAVIGATION COMPONENT **********/
/******************************************/

export class NavigationComponent implements OnInit, IQuerierComponent {

  /*******************************/
  /********** ATTRIBUTS **********/
  /*******************************/

  /**
   * @var string input id menu id
   * @var string input slug menu slug
   * @var IQueryService queryService querier serivce
   * @var IMenu menu navigation menu
   * @var Array<INavigationItem> menuItems navigation items
   * @var Bool isCollapsed tells if menu is collapsed
   */

  @Input('navID') id: string;
  @Input('navSlug') slug: string;
  public queryService: IQueryService;
  public menu: IMenu;
  public menuItems: Array<INavigationItem>;
  public isCollapsed = false;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param IQueryService queryService querier serivce
   */

  constructor(service: MenuService) {
    this._setValues(service);
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** NG ON INIT **********/
  /********************************/

  ngOnInit() {
    this.getData();
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** SET VALUES **********/
  /********************************/

  /**
   * @param IQueryService queryService querier serivce
   */

  private _setValues(service: IQueryService) {
    this._setQueryService(service);
  }

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** SET QUERY SERVICE **********/
  /***************************************/

  /**
   * @param IQueryService queryService querier serivce
   */

  private _setQueryService(service: IQueryService) {
    this.queryService = service;
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** GET DATA **********/
  /******************************/

  getData(): void {
    this._getMenu();
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** GET MENU **********/
  /******************************/

  private _getMenu(): void {
    if ((this.id && this.id.length > 0)) {
      this.queryService.getByIDAsync(this.id).subscribe(menu => {
        this.menu = menu as IMenu;
        this.menuItems = this.menu.items;
      });
      return;
    }

    if ((this.slug && this.slug.length > 0)) {
      this.queryService.getBySlugAsync(this.slug).subscribe(menu => {
        this.menu = menu as IMenu;
        this.menuItems = this.menu.items;
      });
      return;
    }
  }
}
