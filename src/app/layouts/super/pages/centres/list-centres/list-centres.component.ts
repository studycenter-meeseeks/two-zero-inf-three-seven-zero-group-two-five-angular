import { SuperService } from './../../../services/super.service';
import { Centre } from './../../../types/super-data-types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-centres',
  templateUrl: './list-centres.component.html',
  styleUrls: ['./list-centres.component.scss']
})
export class ListCentresComponent implements OnInit {
  displayedColumns: string[] = ['name', 'location', 'psychologistsCount', 'employeesCount'];
  dataSource;
  centres: Centre[] = [];
  centre: Centre;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private _router: Router, private _superService: SuperService) { }

  ngOnInit(): void {
    this._superService.getAllCentres().subscribe(event => {
      if (event.type === HttpEventType.Sent) {

      }
      if (event.type === HttpEventType.Response) {
        this.centres = event.body as Centre[];
        this.dataSource = new MatTableDataSource<Centre>(this.centres);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator =this.paginator;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onAddNewCentre() {
    this._router.navigate(['./super/centres/new']);
  }

}

