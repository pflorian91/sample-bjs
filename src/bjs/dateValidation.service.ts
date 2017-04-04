/**
 * dateValidation.service created on 4/4/17 12:29 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

import { Injectable } from '@angular/core';
import { IInputModel } from './dateComponent';

export interface IDateValidationService {
	validate(date: Date): boolean;
}

@Injectable()
export class DateValidationService implements IDateValidationService {

	public validate(date: Date): boolean {
		if (date) {
			return true;
		} else {
			return false;
		}
	}
}
