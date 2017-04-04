/**
 * dateAdapter.service created on 4/4/17 12:56 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

import { IInputModel } from './dateComponent';

export interface IDateAdapterService {
	parseInputToDate(inputModel: IInputModel): Date;
}

export class DateAdapterService implements IDateAdapterService {

	public parseInputToDate(inputModel: IInputModel): Date {
		return new Date(inputModel.year, inputModel.month, inputModel.day);
	}
}
