/**
 * index created on 4/4/17 11:21 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

// This module is purely written in Angular 1.
import * as angular from 'angular';
import {NgModule} from '@angular/core';
import { DateComponent } from './dateComponent';
import { DateValidationService } from './dateValidation.service';
import { downgradeInjectable } from '@angular/upgrade/src/aot/downgrade_injectable';
import { DateAdapterService } from './dateAdapter.service';

export const DateModule = angular.module('DateModule', ['ngRoute']);

DateModule.factory('DateValidationService', downgradeInjectable(DateValidationService));

DateModule.service('DateAdapterService', DateAdapterService);

DateModule.component('dateComponent', DateComponent);
DateModule.config(($routeProvider) => {
	$routeProvider.when('/date', {template : '<date-component></date-component>'});
});

// techncially, this is not required, but it is nice to have it for consistency
@NgModule({})
export class DateNgModule {
}
