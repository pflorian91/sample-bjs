/**
 * dateComponent created on 4/4/17 11:55 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */


interface IInputModel {
	year: number;
	month: number;
	day: number;
}

interface IDateComponentController extends angular.IComponentController {
	initializeDate(): void;
}

class DateComponentController implements IDateComponentController {

	public inputModel: IInputModel;

	constructor() {}

	public $onInit = () => {
		this.initializeDate();
	};

	public initializeDate(): void {
		this.inputModel = {
			year: 2017,
			month: 3,
			day: 27,
		};
	}
}

export const DateComponent = {
	template: `
		<div class="container">
			<div class="col-md-6 col-md-offset-3">
				<ng-form name="dateComponentForm">
					<div class="row">
						<div class="form-group col-md-2">
					        <input
					                type="number"
					                id="day"
					                name="day"
					                ng-model="$ctrl.inputModel.day"
					                class="form-control"
					                placeholder="dd"
					        >
					    </div>
					
						<div class="col-md-1">
						    <span>-</span>
						</div>
						
					    <div class="form-group col-md-2">
					        <input
					                type="number"
					                id="month"
					                name="month"
					                ng-model="$ctrl.inputModel.month"
					                class="form-control"
					                placeholder="mm"
					        >
					    </div>
					
                        <div class="col-md-1">
						    <span>-</span>
						</div>
					
					    <div class="form-group col-md-3">
					        <input
					                type="number"
					                id="year"
					                name="year"
					                ng-model="$ctrl.inputModel.year"
					                class="form-control"
					                placeholder="yyyy"
					        >
					    </div>
					</div>
				</ng-form>
			</div>
		</div>
	`,
	controller: DateComponentController
};
