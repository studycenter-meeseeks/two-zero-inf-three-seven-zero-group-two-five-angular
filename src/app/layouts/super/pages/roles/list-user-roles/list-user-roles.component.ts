import { Role } from './../../../types/super-data-types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-user-roles',
  templateUrl: './list-user-roles.component.html',
  styleUrls: ['./list-user-roles.component.scss']
})
export class ListUserRolesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'actions'];
  dataSource;
  roles: Role[] = [];
  role: Role;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onAssignRole(role){

  }
  onViewPrivileges(role){

  }
  oViewRoleMembers(role){

  }

  onAddNewRole(){
    
  }

}
