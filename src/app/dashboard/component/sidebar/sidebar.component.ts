import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarItems = [
    { label: 'Dashboard', icon: '/assets/fi-br-home.svg'},
    { label: 'Users', icon: '/assets/users-alt 1.svg'},
    { label: 'Customers', icon: '/assets/team-check.svg'},
    { label: 'Analytics', icon: '/assets/chart-histogram 1.svg'},
    { label: 'Projects', icon: '/assets/diagram-project 1.svg'},
    { label: 'Department', icon: '/assets/department-structure (1) 1.svg', },
    { label: 'Roles & Permissions', icon: '/assets/supervised_user_circle.svg'},
    { label: 'Teams', icon: '/assets/lead-management 1.svg'},
    { label: 'Cases', icon: '/assets/Vector.svg'}
  ];

  activeIndex: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  navigateToRoute(index: number): void {
    this.activeIndex = index;
  }
}
