import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDatepicker} from '@angular/material';

@Component({
  selector: 'aeq-members-create',
  templateUrl: './members-create.component.html',
  styleUrls: ['./members-create.component.css']
})
export class MembersCreateComponent implements OnInit {

  personalDataForm: FormGroup;
  genderValues: string[] = ['Male', 'Female'];

  teamspeakForm: FormGroup;
  ts3Nicknames: string[] = ['Cypher', 'Cypher', 'Cypher'];
  ts3SuggestedNicknames: string[] = ['User 1', 'User 2'];

  forumForm: FormGroup;

  @ViewChild(MatDatepicker) set initDatepicker(datepicker: MatDatepicker<Date>) {
    if (datepicker != null) {
      this.setDatepickerBounds(datepicker);
    }
  }
  minDate: Date;
  maxDate: Date;
  trialPeriodOptions: string[] = ['Start upon submit', 'Custom'];
  selectedTrialOption: string;

  trialPeriodForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.personalDataForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    });

    this.forumForm = this._formBuilder.group({
      forumId: ['', Validators.required]
    });

    this.teamspeakForm = this._formBuilder.group({
      nickname: ['', Validators.required]
    });

    this.trialPeriodForm = this._formBuilder.group({
      selectedOption: ['', Validators.required],
      startDate: ['']
    });
  }

  private setDatepickerBounds(datepicker: MatDatepicker<Date>) {
    datepicker.openedStream.subscribe(() => {
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() + 1);
      const next = new Date();
      next.setDate(this.minDate.getDate() + 6);
      this.maxDate = next;
    });
  }

  setSuggestedNickname(nickname: string) {
    this.teamspeakForm.controls['nickname'].setValue(nickname);
  }

  submit() {
    console.log(this.personalDataForm.value);
    console.log(this.teamspeakForm.value);
    console.log(this.forumForm.value);
    console.log(this.trialPeriodForm.value);
  }
}
