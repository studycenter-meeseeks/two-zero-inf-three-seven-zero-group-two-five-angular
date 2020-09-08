import { SuperService } from './../../../services/super.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-centre',
  templateUrl: './add-centre.component.html',
  styleUrls: ['./add-centre.component.scss']
})
export class AddCentreComponent implements OnInit {
  centreDetailsFormGroup: FormGroup;
  centreAddressFormGroup: FormGroup;

  formToSendToServer: any = {};
  constructor(
    private _formBuiler: FormBuilder,
    private _superService: SuperService,
    private _router: Router) {
  }

  ngOnInit(): void {
    this.buildCentreDetailsForm();
    this.buildCenterAddressForm();
  }

  get Name() {
    return this.centreDetailsFormGroup.get('Name');
  }

  get Line1() {
    return this.centreAddressFormGroup.get('Line1');
  }

  get Line2() {
    return this.centreAddressFormGroup.get('Line2');
  }

  get CityOrTown() {
    return this.centreAddressFormGroup.get('CityOrTown');
  }

  get Province() {
    return this.centreAddressFormGroup.get('Province');
  }

  get ZipCode() {
    return this.centreAddressFormGroup.get('ZipCode');
  }

  private buildCentreDetailsForm() {
    this.centreDetailsFormGroup = this._formBuiler.group({
      Name: ['', Validators.required]
    });
  }

  private buildCenterAddressForm() {
    this.centreAddressFormGroup = this._formBuiler.group({
      Line1: ['', Validators.required],
      Line2: [''],
      CityOrTown: ['', Validators.required],
      Province: ['', Validators.required],
      ZipCode: ['', Validators.required]
    });
  }

  private buildFormToSendToServer() {
    this.formToSendToServer["Name"] = this.Name.value;
    this.formToSendToServer["AddressLine1"] = this.Line1.value;
    this.formToSendToServer["AddressLine2"] = this.Line2.value;
    this.formToSendToServer["AddressCityOrTown"] = this.CityOrTown.value;
    this.formToSendToServer["Province"] = this.Province.value;
    this.formToSendToServer["ZipCode"] = this.ZipCode.value;
  }

  onSubmit() {
    this.buildFormToSendToServer();

    this._superService.createCentre(this.formToSendToServer).subscribe(event => {
      if (event.type === HttpEventType.Sent) {

      }
      if (event.type === HttpEventType.Response) {

      }
    });
  }

  goToCentres() {
    this._router.navigate(['./super/centres']);
  }

}
