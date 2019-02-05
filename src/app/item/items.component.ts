import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { TNSPlayer } from 'nativescript-audio';

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

  private _player: TNSPlayer;

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
    
  }

  public togglePlay() {

    console.log(this._player);
    if (this._player.isAudioPlaying()) {
      this._player.pause();
    } else {
      this._player.play();
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


}