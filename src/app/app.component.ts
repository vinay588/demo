import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1> {{name}}</h1>
  	<p><i>{{name}} is at {{street}} in {{city}} in {{region}} region</i></p>
  	<label>Name: <input [(ngModel)]="name"> </label>
  	<br/>
  	<label><input type="checkbox" [(ngModel)]="hideAddress"> Hide Address</label>
  	<div [hidden]="hideAddress">
  		<fieldset>
  			<label>Street: <input [(ngModel)]="street"></label>
  		</fieldset>
  		<fieldset>
  			<label>City: <input [(ngModel)]="city"> </label>
  		</fieldset>
  		<fieldset>
  			<select [(ngModel)]="region">
				<option>north</option>
				<option>east</option>
				<option>west</option>
				<option>south</option>
  			</select>
  		</fieldset>
  	</div>
  `,
})
export class AppComponent  { 
	name = 'Vinay Sharma '; 
	city = 'Hyderabad';
	street = '342 park avenue';
	hideAddress = false;
	region = 'east';

	addressClick() {
		this.hideAddress = !this.hideAddress;
	}

	changeAddress(region: string) {
		this.region = region
	}
}
