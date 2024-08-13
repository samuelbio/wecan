import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from "ng-zorro-antd/layout";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'wc-main-layout',
  standalone: true,
  imports: [
    NzContentComponent,
    NzHeaderComponent,
    NzIconDirective,
    NzLayoutComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSiderComponent,
    NzSubMenuComponent,
    RouterOutlet,
    RouterLink,
    NgForOf
  ],
  templateUrl: './main-layout.component.html',
  styles: `
    :host {
      display: flex;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .app-layout {
      height: 100vh;
    }

    .menu-sidebar {
      position: relative;
      z-index: 10;
      min-height: 100vh;
      box-shadow: 2px 0 6px rgba(0,21,41,.35);
    }

    .header-trigger {
      height: 64px;
      padding: 20px 24px;
      font-size: 20px;
      cursor: pointer;
      transition: all .3s,padding 0s;
    }

    .trigger:hover {
      color: #1890ff;
    }

    .sidebar-logo {
      position: relative;
      height: 64px;
      padding-left: 24px;
      overflow: hidden;
      line-height: 64px;
      background: #001529;
      transition: all .3s;
    }

    .sidebar-logo img {
      display: inline-block;
      height: 32px;
      width: 32px;
      vertical-align: middle;
    }

    .sidebar-logo h1 {
      display: inline-block;
      margin: 0 0 0 20px;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
      vertical-align: middle;
    }

    nz-header {
      padding: 0;
      width: 100%;
      z-index: 2;
    }

    .app-header {
      position: relative;
      height: 64px;
      padding: 0;
      background: #fff;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);
    }

    nz-content {
      margin: 24px;
    }

    .inner-content {
      padding: 24px;
      background: #fff;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {
  isCollapsed = false;


  menus: {
    link: string,
    icon: string,
    label: string
  }[] = [
    {
      link: 'dashboard',
      icon: 'dashboard',
      label: 'Dashboard'
    },
    {
      link: 'users',
      icon: 'user',
      label: 'Utilisateurs'
    },
    {
      link: 'activities',
      icon: 'user',
      label: 'Activités'
    },
    {
      link: 'products',
      icon: 'appstore',
      label: 'Produits'
    },
    {
      link: 'specialities',
      icon: 'appstore',
      label: 'Specialités'
    },
    {
      link: 'comments',
      icon: 'form',
      label: 'Commentaires'
    }
  ]
}
