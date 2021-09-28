import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: 'BorczeA',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'my notes :)'
  }

  userSettings: UserSettings = { ...this.originalUserSettings }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('in onSumbmit: ', form.valid)

    this.dataService.postUserSettingsForm(this.userSettings).subscribe(      
        result => console.log('result from observable = ', result),
        error => console.log('error: ', error)        
    );

  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid)
  }
}
