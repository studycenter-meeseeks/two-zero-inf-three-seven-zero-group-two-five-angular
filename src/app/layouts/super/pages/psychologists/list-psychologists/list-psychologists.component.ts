import { AccountService } from './../../../../../services/account/account.service';
import { SuperService } from './../../../services/super.service';
import { Psychologist } from './../../../types/super-data-types';
import { UsersService } from './../../../../../services/users/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-psychologists',
  templateUrl: './list-psychologists.component.html',
  styleUrls: ['./list-psychologists.component.scss']
})
export class ListPsychologistsComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'practiceTitle', 'practiceNo', 'hPCSANo', 'actions'];
  dataSource;

  psychologists: Psychologist[] = [];
  psychologist: Psychologist;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _usersService: UsersService,
    private _superService: SuperService,
    private _accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getPsychologistsFromServer();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  onAddNewPsychologist() {
    this._router.navigate(['./super/psychologists/new']);
  }

  onViewContactDetails(psychologist) {
  }

  onViewQualifications(psychologist) {

  }

  onViewServices(psychologist) {

  }

  onDeactivate(psychologist) {

  }

  onResentAccountCreatedEmail(psychologist: Psychologist) {
    this._accountService.resendPsychologistAccountCreatedEmail(psychologist.id).subscribe(
      event => {
        if (event.type === HttpEventType.Sent) {

        }
        if (event.type === HttpEventType.Response) {
          this.openSnackBar("Email Resent", "Success!", 2000);
        }
      });


  }

  private getPsychologistsFromServer() {
    this._usersService.getPsychologists().subscribe(event => {
      if (event.type === HttpEventType.Sent) {

      }
      if (event.type === HttpEventType.Response) {
        this.psychologists = event.body as Psychologist[];
        this.dataSource = new MatTableDataSource<Psychologist>(this.psychologists);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    })
  }

  private openSnackBar(message: string, action: string, _duration: number) {
    this._snackBar.open(message, action, {
      duration: _duration,
    });
  }

}