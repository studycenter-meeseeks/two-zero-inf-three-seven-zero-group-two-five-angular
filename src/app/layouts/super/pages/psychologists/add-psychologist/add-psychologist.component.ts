import { AccountService } from './../../../../../services/account/account.service';
import { SuperService } from './../../../services/super.service';
import { GenericNameAndId } from './../../../../../types/data-types';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { Centre } from '../../../types/super-data-types';
import { Router } from '@angular/router';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-add-psychologist',
  templateUrl: './add-psychologist.component.html',
  styleUrls: ['./add-psychologist.component.scss']
})
export class AddPsychologistComponent implements OnInit {

  genders: GenericNameAndId[];
  titles: GenericNameAndId[];
  centers: Centre[];

  psychologistDetails: FormGroup;


  psychologistQualifications: string[] = [];
  psychologistServices: string[] = [];
  selectedCentres: string[] = [];

  formToSendToServer: any = {};

  constructor(
    private _accountService: AccountService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _superService: SuperService) { }

  ngOnInit(): void {
    this.getTitlesFromServer();
    this.getGendersFromServer();
    this.getCentresFromServer();
    this.buildPsychologistDetailsForm();
  }

  get FullName() {
    return this.psychologistDetails.get('FullName');
  }

  get PracticeNo() {
    return this.psychologistDetails.get('PracticeNo');
  }

  get HPCSANo() {
    return this.psychologistDetails.get('HPCSANo');
  }

  get About() {
    return this.psychologistDetails.get('About');
  }

  get PracticeTitle() {
    return this.psychologistDetails.get('PracticeTitle');
  }

  get WorkContactNumber() {
    return this.psychologistDetails.get('WorkContactNumber');
  }

  get GenderId() {
    return this.psychologistDetails.get('GenderId');
  }

  get TitleId() {
    return this.psychologistDetails.get('TitleId');
  }


  get CellContactNumber() {
    return this.psychologistDetails.get('CellContactNumber');
  }

  get EmailAddress() {
    return this.psychologistDetails.get('EmailAddress');
  }

  onGoToPsychologists() {
    this._router.navigate(['./super/psychologists']);
  }

  onAddPsychologistQualification(qualification: string) {
    this.psychologistQualifications.push(qualification);
  }

  onAddPsychologistServices(service: string) {
    this.psychologistServices.push(service);
  }

  onAddCentre(options: MatListOption[]) {
    options.map(item => {
      if (this.selectedCentres.includes(item.value) == false) {
        this.selectedCentres.push(item.value);
      }
    })
  }

  onSubmit() {
    this.prepareFormToSendToServer();

    this._accountService.addPsychologistt(this.formToSendToServer).subscribe(event => {
      if (event.type === HttpEventType.Sent) {

      }
      if (event.type === HttpEventType.Response) {
        this._router.navigate(['./super/psychologists']);
      }
    })

  }

  private prepareFormToSendToServer() {
    this.formToSendToServer['FullName'] = this.FullName.value;
    this.formToSendToServer['PracticeNo'] = this.PracticeNo.value;
    this.formToSendToServer['HPCSANo'] = this.HPCSANo.value;
    this.formToSendToServer['About'] = this.About.value;
    this.formToSendToServer['PracticeTitle'] = this.PracticeTitle.value;
    this.formToSendToServer['WorkContactNumber'] = this.WorkContactNumber.value;
    this.formToSendToServer['GenderId'] = this.GenderId.value;
    this.formToSendToServer['TitleId'] = this.TitleId.value;
    this.formToSendToServer['CellContactNumber'] = this.CellContactNumber.value;
    this.formToSendToServer['EmailAddress'] = this.EmailAddress.value;

    this.formToSendToServer['Qualifications'] = this.psychologistQualifications;
    this.formToSendToServer['Services'] = this.psychologistServices;
    this.formToSendToServer['Centres'] = this.selectedCentres;
  }

  private buildPsychologistDetailsForm() {
    this.psychologistDetails = this._formBuilder.group({
      FullName: ['', Validators.required],
      PracticeNo: ['', Validators.required],
      HPCSANo: ['', Validators.required],
      About: ['', Validators.required],
      PracticeTitle: ['', Validators.required],
      WorkContactNumber: ['', Validators.required],
      GenderId: ['', Validators.required],
      TitleId: ['', Validators.required],
      CellContactNumber: [''],
      EmailAddress: ['', [Validators.required, Validators.email]],
    });
  }

  private getTitlesFromServer() {
    this._superService.getAllTitles().subscribe(event => {
      if (event.type === HttpEventType.Response) {
        this.titles = event.body as GenericNameAndId[];
      }
    });
  }

  private getGendersFromServer() {
    this._superService.getAllGenders().subscribe(event => {
      if (event.type === HttpEventType.Response) {
        this.genders = event.body as GenericNameAndId[];
      }
    });
  }

  private getCentresFromServer() {
    this._superService.getAllCentres().subscribe(event => {
      if (event.type === HttpEventType.Response) {
        this.centers = event.body as Centre[];
      }
    });
  }

}

