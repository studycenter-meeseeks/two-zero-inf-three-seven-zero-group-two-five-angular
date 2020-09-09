import { Role } from './../../../types/super-data-types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SuperService } from '../../../services/super.service';
import { HttpEventType } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-user-roles',
  templateUrl: './list-user-roles.component.html',
  styleUrls: ['./list-user-roles.component.scss']
})
export class ListUserRolesComponent implements OnInit {
  displayedColumns: string[] = ['roleName', 'actions'];
  dataSource;
  roles: Role[] = [];
  role: Role;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private _router: Router,private _superService:SuperService) {
    this._superService.getAllRolesAndPrivileges().subscribe(event=>{
      if (event.type === HttpEventType.Sent) {

      }
      if (event.type === HttpEventType.Response) {
        this.roles = event.body as Role[];
        this.dataSource = new MatTableDataSource<Role>(this.roles);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator =this.paginator;
      }
    })
   }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onAssignRole(role) {

  }
  onViewPrivileges(role) {

  }
  oViewRoleMembers(role) {

  }

  onAddNewRole() {
    this._router.navigate(['/super/roles/new']);
  }

}
