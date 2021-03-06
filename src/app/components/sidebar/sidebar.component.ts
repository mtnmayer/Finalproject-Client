import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetLocationService } from 'app/get-location.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/my-plans', title: 'My Travels', icon:'content_paste', class: '' },
    { path: '/table-list', title: 'Recommend Travels', icon:'location_on' ,class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps', icon:'person', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    {path: '/about-us', title: 'About-us', icon: 'person', class: ''},
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private route:Router,private getLocationService:GetLocationService) { }
  navigateToPath(nav)
  {
console.log("nav",nav);
this.route.navigate(['app/'+nav]);

  }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    // console.log("this.menuItems before",this.menuItems );
    // console.log(this.route.url);
    // for(let i=0;i<this.menuItems.length;i++)
    // {
    //   if(this.menuItems[i].path=="/dashboard")
    //   {
    //     this.menuItems[i].path=this.route.url;

    //   }
    //   else{
    //     this.menuItems[i].path=this.route.url+this.menuItems[i].path;

    //   }
    // }
    // // this.menuItems[1].path=this.route.url+"/my-plans"
    // console.log("this.menuItems after",this.menuItems );
    this.menuItems=ROUTES
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
