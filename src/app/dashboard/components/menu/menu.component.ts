import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { menuPageList } from 'src/app/dashboard/shared/consts/menu-pages-list.const';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  mainTitle = 'RxJS Store';
  subTitle = 'Demo';

  scrolled = false;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  pageList = menuPageList;

  linkTitle: string;
  subLinkTitle: string;

  userName: string;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    // private authService: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    // this.userName = this.authService.getCurrentUser();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  signOut() {
    // this.authService.signOut();
    this.userName = undefined;
  }


  @HostListener('document:scroll', ['$event'])
  onDocumentMousewheelEvent() {
    const position = window.pageYOffset;
    this.scrolled = position >= 70;
  }

  updateTitlePage(linkTitle, subLinkTitle) {
    this.linkTitle = linkTitle;
    this.subLinkTitle = subLinkTitle;
  }

}
