import { Centre } from './../../../types/super-data-types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-centres',
  templateUrl: './list-centres.component.html',
  styleUrls: ['./list-centres.component.scss']
})
export class ListCentresComponent implements OnInit {
  displayedColumns: string[] = ['name', 'location','psychologistsCount','employeesCount'];
  dataSource;
  centres: Centre[] = [];
  centre: Centre;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  onAddNewCentre(){

  }

}

