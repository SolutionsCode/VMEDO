import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CommonService } from 'src/app/service/common.service';

import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade]);

declare var gtag: Function;

@Component({
  selector: 'app-urgent-care-at-home-component',
  templateUrl: './urgent-care-at-home-component.component.html',
  styleUrls: ['./urgent-care-at-home-component.component.css'],
})
export class UrgentCareAtHomeComponentComponent {

  isSideMenuOpen2 = false;
  isOpen2 = false;

  toggleServices2() {
    this.isOpen2= !this.isOpen2;
  }

  isDropdownDesktopOpen: boolean = false;

  toggleDropdownDesktop() {
      this.isDropdownDesktopOpen = !this.isDropdownDesktopOpen;
  }

  
  phone: any;

  // Array to hold accordion items
  accordions = [
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
  ];

  // Method to toggle the open/closed state of accordion
  toggleAccordion(index: number): void {
    this.accordions[index].isOpen = !this.accordions[index].isOpen;
  }

  private window: any;

  isSideMenuOpen: boolean = false;

  toggleSideMenu(): void {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  //Services popup
  showPopup: boolean = false;

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }

  //Services popup
  showPopup2: boolean = false;

  togglePopup22(): void {
    this.showPopup2 = !this.showPopup2;
  }

  // Toggle Urgentcare at home
  selectedUrgentcare: string | null = null; // Track the selected specialty

  togglePopup2(urgentCare: string) {
    this.selectedUrgentcare = urgentCare; // Set the selected specialty
  }

  clearPopup() {
    this.selectedUrgentcare = null; // Clear the selected specialty when closing the popup
  }



   // Toggle Urgentcare at home
   selectedUrgentcareDesktop: string | null = null; // Track the selected specialty

   togglePopup2Desktop(urgentCareDesktop: string) {
     this.selectedUrgentcareDesktop = urgentCareDesktop; // Set the selected specialty
   }
 
   clearPopupDesktop() {
     this.selectedUrgentcareDesktop = null; // Clear the selected specialty when closing the popup
   }



  //mobile widget icons
  selectedIndex: number = -1; // Initialize selectedIndex to -1, indicating no icon is selected

  selectIcon(index: number) {
    this.selectedIndex = index; // Set the selectedIndex to the clicked icon index
  }

  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile();
  }

  private checkIfMobile() {
    this.isMobile = window.innerWidth <= 768; // Adjust as needed
  }

  vmedo_labs_desktop: SwiperOptions = {
    slidesPerView: 2,
    navigation: true,
  };

  vmedo_review_desktop: SwiperOptions = {
    slidesPerView: 3,
  };

  ngOnInit(): void {
    this.phone = 9343180000;

    this.titleService.setTitle('Urgent Medical Care at Home');

    this.metaTagService.addTags([
      {
        name: 'description',
        content:
          'Discover the convenience of at-home healthcare with Bandaging, injection,vaccination and catheterization services. Your trusted partner for comprehensive urgent medical care in the comfort of your own home',
      },
      {
        name: 'author',
        content: 'VMEDO',
      },
    ]);
  }

  /**
   * CONSTRUCTOR
   * @param common
   * @param route
   * @param app
   */

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public common: CommonService,
    private router: Router,
    public app: AppComponent,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    this.checkIfMobile();
    this.window = this.document.defaultView;
    this.common.modal.CloseAllModal();

    gtag('event', 'page_view', {
      send_to: 'G-9VRNKZ96W9',
      page_title: 'Home page',
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }

  vmedo_review_mobile: SwiperOptions = {
    slidesPerView: 1.2,
    pagination: false,
  };

  vmedo_urgent_care_at_home_mobile: SwiperOptions = {
    slidesPerView: 2.4,
    pagination: false,
  };

  our_services_dektop: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 14,
    navigation: true,
  };

  our_other_services_dektop: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 14,
  };


  OnClickLogout = () => {
    this.common.userInfo = undefined;
    this.common.auth_token = undefined;
    this.common.refresh_token = undefined;
    localStorage.clear();
    this.app.ShowSuccess(`User logged out successfully`).finally(() => {
      this.router.navigate(['/home']);
    });
  };

  
}
