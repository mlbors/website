/**
 * Website - Navigation Component - Component
 *
 * @since       2018.04.22
 * @version     1.0.0.0
 * @author		  mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Component, Input, OnInit } from '@angular/core';

import { IMenu } from '../../interfaces/imenu';
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
   * @var IMenu _menu navigation menu
   */

  @Input('navID') id: string;
  @Input('navSlug') slug: string;
  public queryService: IQueryService;
  private _menu: IMenu;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  /**
   * @param IQueryService queryService querier serivce
   */

  constructor(queryService: MenuService) { }

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
      this.queryService.getByIDAsync(this.id).then(menu => this._menu = menu as IMenu);
      return;
    }

    if ((this.slug && this.slug.length > 0)) {
      this.queryService.getBySlugAsync(this.slug).then(menu => this._menu = menu as IMenu);
      return;
    }
  }

}
