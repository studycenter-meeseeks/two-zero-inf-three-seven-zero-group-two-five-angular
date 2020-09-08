import { Component, OnInit, ViewChild } from '@angular/core';
import { Psychologist } from '../../../types/super-data-types';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-psychologists',
  templateUrl: './list-psychologists.component.html',
  styleUrls: ['./list-psychologists.component.scss']
})
export class ListPsychologistsComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'practiceTitle', 'practiceNo', 'hPCSANo', 'actions'];
  dataSource;

  roles: Psychologist[] = [];
  role: Psychologist;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private _router: Router) { }

  ngOnInit(): void {
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
}