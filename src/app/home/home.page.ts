import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js'
import {Platform} from '@ionic/angular';
import {Capacitor} from "@capacitor/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  heightPlatform = 0;
  widthPlatform = 0;
  widthHearth = 50;
  positionTopHeath = 0;
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
      this.widthHearth = this.widthPlatform / 5.6;
      this.positionTopHeath = (1426 * this.widthPlatform) / 1500;
      this.wc1 = 290 * this.widthPlatform / 1500
      this.wc2 = 613 * this.widthPlatform / 1500
      this.wc3 = 933 * this.widthPlatform / 1500
      setTimeout(() => {
        this.createNewScratchCard();
        this.createNewScratchCard2();
        this.createNewScratchCard3();
      }, 100)
    });

  }

  ngOnInit() {

  }

  createNewScratchCard() {
    try {
      const scContainer = document.getElementById('js--sc--container')
      const sc = new ScratchCard('#js--sc--container', {
        scratchType: SCRATCH_TYPE.CIRCLE,
        containerWidth: this.widthHearth,//scContainer.offsetWidth,
        containerHeight: this.widthHearth,
        imageForwardSrc: './assets/images/cuore.png',
        //imageBackgroundSrc: './assets/images/scratchcard-background.svg',
        htmlBackground: '<div class="cardamountcss"><div class="won-amnt">30</div><div class="won-text">Points<br>Won!</div></div>',
        clearZoneRadius: this.widthHearth / 10,
        nPoints: 30,
        pointSize: 4,
        callback: () => {
          console.log('Now the window will reload !')
        }
      })
      // Init
      sc.init();
    } catch (e) {

    }

  }

  createNewScratchCard2() {
    try {
      const scContainer = document.getElementById('js--sc--container2')
      const sc = new ScratchCard('#js--sc--container2', {
        scratchType: SCRATCH_TYPE.CIRCLE,
        containerWidth: this.widthHearth,//scContainer.offsetWidth,
        containerHeight: this.widthHearth,
        imageForwardSrc: './assets/images/cuore.png',
        //imageBackgroundSrc: './assets/images/scratchcard-background.svg',
        htmlBackground: '<div class="cardamountcss"><div class="won-amnt">30</div><div class="won-text">Points<br>Won!</div></div>',
        clearZoneRadius: this.widthHearth / 10,
        nPoints: 30,
        pointSize: 4,
        callback: () => {
          console.log('Now the window will reload !')
        }
      })
      // Init
      sc.init();
    } catch (e) {

    }

  }


  createNewScratchCard3() {
    try {
      const scContainer = document.getElementById('js--sc--container3')
      const sc = new ScratchCard('#js--sc--container3', {
        scratchType: SCRATCH_TYPE.CIRCLE,
        containerWidth: this.widthHearth,//scContainer.offsetWidth,
        containerHeight: this.widthHearth,
        imageForwardSrc: './assets/images/cuore.png',
        //imageBackgroundSrc: './assets/images/scratchcard-background.svg',
        htmlBackground: '<div class="cardamountcss"><div class="won-amnt">30</div><div class="won-text">Points<br>Won!</div></div>',
        clearZoneRadius: this.widthHearth / 10,
        nPoints: 30,
        pointSize: 4,
        callback: () => {
          console.log('Now the window will reload !')
        }
      })
      // Init
      sc.init();
    } catch (e) {

    }

  }

}
