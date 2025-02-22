import { CommonModule, DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
} from '@angular/core';
import Swiper from 'swiper';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from 'swiper';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

declare var gtag: Function;

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade]);

@Component({
  selector: 'app-vmedo-homepage',
  templateUrl: './vmedo-homepage.component.html',
  styleUrls: ['./vmedo-homepage.component.css'],
})
export class VmedoHomepageComponent {

  isSideMenuOpen2 = false;
  isOpen2 = false;

  toggleServices2() {
    this.isOpen2= !this.isOpen2;
  }


  isDropdownDesktopOpen: boolean = false;

  toggleDropdownDesktop() {
      this.isDropdownDesktopOpen = !this.isDropdownDesktopOpen;
  }


  //device detection
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile();
  }

  private checkIfMobile() {
    this.isMobile = window.innerWidth <= 768; // Adjust as needed
  }

  //side menu
  isSideMenuOpen: boolean = false;

  toggleSideMenu(): void {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  //Services popup
  showPopup: boolean = false;

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }

  showSection: boolean = true;

  toggleSection(): void {
    this.showSection = !this.showSection;
  }

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  //mobile widget icons
  selectedIndex: number = -1; // Initialize selectedIndex to -1, indicating no icon is selected

  selectIcon(index: number) {
    this.selectedIndex = index; // Set the selectedIndex to the clicked icon index
  }

  ngOnInit(): void {

    this.titleService.setTitle("VMEDO Healthcare - Ambulance service | Urgent care at home | Diagnostics at home");

    this.metaTagService.addTags([
      { name: 'description', content: 'VMEDO is a digital healthcare platform, on a mission to make quality healthcare accessible and affordable to all providing ambulance service, urgent care at home, diagnostics at home, instant online doctor consultation, emergency hospital admission 24*7 across India'
     },
     { name: 'author', content: 'VMEDO'},
    ]);

  }

  private window: any;

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
    private metaTagService: Meta,
    private elRef: ElementRef
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


  scrollToSection2() {
    const section2 = this.elRef.nativeElement.querySelector('#section2');
    if (section2) {
      section2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper([swiper]) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  //Swiper codes

  vmedo_banner_desktop: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    effect: 'fade', // Set effect to 'fade'
    autoplay: { delay: 3000 }, // Set autoplay delay to 3000 milliseconds
  };


  vmedo_mini_banners_desktop: SwiperOptions = {
    slidesPerView: 3.2,
    spaceBetween: 14,

  };

  vmedo_mini_banners_mobile: SwiperOptions = {
    slidesPerView: 1.35,
    spaceBetween: 2,

  };

  vmedo_achievements_mobile: SwiperOptions = {
    slidesPerView: 2.2,
    spaceBetween: 2,

  };

  vmedo_media_desktop: SwiperOptions = {
    slidesPerView: 6,
    spaceBetween: 14,

  };

  care_at_home_dektop: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 14,
    navigation:true
  };

  diagnostics_at_home_dektop: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 14,
    navigation:true
  };
  
  vmedo_store_dektop: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 14,
  };

  vmedo_services_desktop2: SwiperOptions = {
    slidesPerView: 6,
    navigation:true
  };

  vmedo_services_desktop: SwiperOptions = {
    slidesPerView: 6,
  };

  vmedo_urgent_care_at_home_desktop: SwiperOptions = {
    slidesPerView: 4,
    navigation: true,
  };

  vmedo_labs_desktop: SwiperOptions = {
    slidesPerView: 2,
    navigation: true,
  };

  vmedo_store_desktop: SwiperOptions = {
    slidesPerView: 3,
    navigation: true,
  };

  vmedo_review_desktop: SwiperOptions = {
    slidesPerView: 3,
  };

  vmedo_review_desktop2: SwiperOptions = {
    slidesPerView: 3,
    navigation: true,
  };

  vmedo_banner_mobile: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: true,
    effect: 'fade', // Set effect to 'fade'
    autoplay: { delay: 3000 }, // Set autoplay delay to 3000 milliseconds
  };

  vmedo_urgent_care_at_home_mobile: SwiperOptions = {
    slidesPerView: 2.4,
    pagination: false,
  };

  vmedo_labs_mobile: SwiperOptions = {
    slidesPerView: 1.2,
    pagination: true,
  };

  vmedo_store_mobile: SwiperOptions = {
    slidesPerView: 2.5,
    pagination: false,
  };

  vmedo_review_mobile: SwiperOptions = {
    slidesPerView: 1.2,
    pagination: false
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
