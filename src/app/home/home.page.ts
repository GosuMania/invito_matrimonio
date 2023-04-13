import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js'
import {IonButton, Platform} from '@ionic/angular';
import {Capacitor} from "@capacitor/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit, AfterViewInit {
  videoPath = 'assets/video_dito.mp4';
  audioPath = 'assets/A Sky Full Of Stars.mp3';
  showALl = false;

  // @ts-ignore
  @ViewChild('audio') audio: ElementRef;
  // @ts-ignore
  @ViewChild('button') btn: ElementRef;

  show = false;
  stopAutoplay = false;
  showMano = true;


  heightPlatform = 0;
  widthPlatform = 0;
  widthHearth = 50;
  positionTopHeath = 0;
  positionTopBottone = 0;
  positionTopDito = 0;
  widthDito = 70;
  leftDito = 100;
  wc1 = 0;
  wc2 = 0;
  wc3 = 0;
  isDesktop = false;
  notWeb = true;
  responsiveSize = 0; // 0 xs sm - 1 md - 2 lg xl
  typeDevice = 0; // 0 web - 1 android - 2 ios

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      this.widthPlatform = this.platform.width();

      this.positionTopHeath = (1320 * this.widthPlatform) / 1500;

      this.positionTopBottone = (1855 * this.widthPlatform) / 1500;

      this.widthDito = this.widthPlatform / 2.6;
      this.positionTopDito = (1335 * this.widthPlatform) / 1500;
      this.leftDito = this.widthPlatform / 4.8;

      setTimeout(() => {
        this.showALl = true;
        setTimeout(() => {
          this.createNewScratchCardCuori();
          this.show = true;
          setTimeout(() => {
            try {
              this.audio.nativeElement.play();
              this.btn.nativeElement.click();
              this.audio.nativeElement.play();
            } catch (e) {
            }
          }, 300);
        }, 100);
      }, 300)
    });

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

  createNewScratchCardCuori() {
    try {
      // const scContainer = document.getElementById('js--sc--container')
      const sc = new ScratchCard('#js--sc--container', {
        scratchType: 1,
        containerWidth: this.widthPlatform,//scContainer.offsetWidth,
        containerHeight: this.widthPlatform / 3.98,
        imageForwardSrc: './assets/invito/cuori.webp',
        htmlBackground: '<p class="test" style="display: none"><strong>Hello i am HTML content !</strong></p>',
        clearZoneRadius: this.widthPlatform / 10,
        nPoints: 50,
        pointSize: 3,
        percentToFinish: 85,
        callback: () => {
          console.log('Now the window will reload !')
          this.audio.nativeElement.play();
        }
      })
      // Init
      sc.init();
    } catch (e) {
      console.log(e);
    }
  }

  linkMapVillaGervasio() {
    window.open('https://maps.app.goo.gl/MFWKaSRhMUQnQxpW7', '_blank');

  }

  startAudio() {
    try {
      if(this.audio.nativeElement.paused && !this.stopAutoplay) {
        console.log('go')
        this.audio.nativeElement.play();
        this.stopAutoplay = true;
      }
      this.showMano = false;
    } catch (e) {
      this.showMano = false;
    }

  }
}
