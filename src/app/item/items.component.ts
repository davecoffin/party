import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TNSPlayer } from 'nativescript-audio';
import { isIOS, device } from 'tns-core-modules/platform';

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

  private _player: TNSPlayer;
  @ViewChild('animateImg') animageImgEl: ElementRef;
  public img;
  public partying: boolean = false;
  private buzz: UISelectionFeedbackGenerator;

  constructor() {
    this._player = new TNSPlayer();
    this._player.initFromFile({
      audioFile: '~/app/audio.mp3', // ~ = app directory
      loop: false,
      completeCallback: this._trackComplete.bind(this),
      errorCallback: this._trackError.bind(this)
    }).then(() => {
      this._player.getAudioTrackDuration().then(duration => {
        // iOS: duration is in seconds
        // Android: duration is in milliseconds
        console.log(`song duration:`, duration);
      });
    });
  }
  
  ngOnInit(): void { 
    this.img = this.animageImgEl.nativeElement;
    if (isIOS && !(parseFloat(device.osVersion) < 10)) this.buzz = UISelectionFeedbackGenerator.new();
  }

  public togglePlay() {
    if (this._player.isAudioPlaying()) {
      this._player.pause();
      this.partying = false;
      this.stopAnimation();
    } else {
      this._player.play();
      this.partying = true;
      this.startAnimation();
    }
  }

  private _trackComplete(args: any) {
    console.log('reference back to player:', args.player);
    console.log('whether song play completed successfully:', args.flag);
  }

  private _trackError(args: any) {
    console.log('reference back to player:', args.player);
    console.log('the error:', args.error);
    console.log('extra info on the error:', args.extra);
  }

  private animateInterval;
  startAnimation() {
    this.animateInterval = setInterval(() => {
      if (this.buzz) this.buzz.selectionChanged()
      this.img.animate({
        scale: {x: 2, y: 2},
        rotate: 45,
        duration: 270
      }).then(() => {
        this.img.animate({
          scale: {x: 1, y: 1},
          rotate: 0,
          duration: 270
        }).then(() => {}, err => {})
      }, err => {})
    }, 540)
  }

  stopAnimation() {
    clearInterval(this.animateInterval);
  }
}