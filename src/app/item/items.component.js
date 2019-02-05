"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var platform_1 = require("tns-core-modules/platform");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        var _this = this;
        this.partying = false;
        this._player = new nativescript_audio_1.TNSPlayer();
        this._player.initFromFile({
            audioFile: '~/app/audio.mp3',
            loop: false,
            completeCallback: this._trackComplete.bind(this),
            errorCallback: this._trackError.bind(this)
        }).then(function () {
            _this._player.getAudioTrackDuration().then(function (duration) {
                // iOS: duration is in seconds
                // Android: duration is in milliseconds
                console.log("song duration:", duration);
            });
        });
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.img = this.animageImgEl.nativeElement;
        if (platform_1.isIOS && !(parseFloat(platform_1.device.osVersion) < 10))
            this.buzz = UISelectionFeedbackGenerator.new();
    };
    ItemsComponent.prototype.togglePlay = function () {
        if (this._player.isAudioPlaying()) {
            this._player.pause();
            this.partying = false;
            this.stopAnimation();
        }
        else {
            this._player.play();
            this.partying = true;
            this.startAnimation();
        }
    };
    ItemsComponent.prototype._trackComplete = function (args) {
        console.log('reference back to player:', args.player);
        console.log('whether song play completed successfully:', args.flag);
    };
    ItemsComponent.prototype._trackError = function (args) {
        console.log('reference back to player:', args.player);
        console.log('the error:', args.error);
        console.log('extra info on the error:', args.extra);
    };
    ItemsComponent.prototype.startAnimation = function () {
        var _this = this;
        this.animateInterval = setInterval(function () {
            if (_this.buzz)
                _this.buzz.selectionChanged();
            _this.img.animate({
                scale: { x: 2, y: 2 },
                rotate: 45,
                duration: 270
            }).then(function () {
                _this.img.animate({
                    scale: { x: 1, y: 1 },
                    rotate: 0,
                    duration: 270
                }).then(function () { }, function (err) { });
            }, function (err) { });
        }, 540);
    };
    ItemsComponent.prototype.stopAnimation = function () {
        clearInterval(this.animateInterval);
    };
    __decorate([
        core_1.ViewChild('animateImg'),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "animageImgEl", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHlEQUErQztBQUMvQyxzREFBMEQ7QUFPMUQ7SUFRRTtRQUFBLGlCQWNDO1FBakJNLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFJL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN4QixTQUFTLEVBQUUsaUJBQWlCO1lBQzVCLElBQUksRUFBRSxLQUFLO1lBQ1gsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hELGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDM0MsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNOLEtBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNoRCw4QkFBOEI7Z0JBQzlCLHVDQUF1QztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksZ0JBQUssSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyw0QkFBNEIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwRyxDQUFDO0lBRU0sbUNBQVUsR0FBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVPLHVDQUFjLEdBQXRCLFVBQXVCLElBQVM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVPLG9DQUFXLEdBQW5CLFVBQW9CLElBQVM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFHRCx1Q0FBYyxHQUFkO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQztZQUNqQyxJQUFJLEtBQUksQ0FBQyxJQUFJO2dCQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUMzQyxLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQkFDZixLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7Z0JBQ25CLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFFBQVEsRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztvQkFDZixLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7b0JBQ25CLE1BQU0sRUFBRSxDQUFDO29CQUNULFFBQVEsRUFBRSxHQUFHO2lCQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTyxDQUFDLEVBQUUsVUFBQSxHQUFHLElBQUssQ0FBQyxDQUFDLENBQUE7WUFDOUIsQ0FBQyxFQUFFLFVBQUEsR0FBRyxJQUFLLENBQUMsQ0FBQyxDQUFBO1FBQ2YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFyRXdCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFlLGlCQUFVO3dEQUFDO0lBSHZDLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7O09BQ1csY0FBYyxDQXlFMUI7SUFBRCxxQkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8nO1xuaW1wb3J0IHsgaXNJT1MsIGRldmljZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBfcGxheWVyOiBUTlNQbGF5ZXI7XG4gIEBWaWV3Q2hpbGQoJ2FuaW1hdGVJbWcnKSBhbmltYWdlSW1nRWw6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBpbWc7XG4gIHB1YmxpYyBwYXJ0eWluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGJ1eno6IFVJU2VsZWN0aW9uRmVlZGJhY2tHZW5lcmF0b3I7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcGxheWVyID0gbmV3IFROU1BsYXllcigpO1xuICAgIHRoaXMuX3BsYXllci5pbml0RnJvbUZpbGUoe1xuICAgICAgYXVkaW9GaWxlOiAnfi9hcHAvYXVkaW8ubXAzJywgLy8gfiA9IGFwcCBkaXJlY3RvcnlcbiAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgY29tcGxldGVDYWxsYmFjazogdGhpcy5fdHJhY2tDb21wbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgZXJyb3JDYWxsYmFjazogdGhpcy5fdHJhY2tFcnJvci5iaW5kKHRoaXMpXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9wbGF5ZXIuZ2V0QXVkaW9UcmFja0R1cmF0aW9uKCkudGhlbihkdXJhdGlvbiA9PiB7XG4gICAgICAgIC8vIGlPUzogZHVyYXRpb24gaXMgaW4gc2Vjb25kc1xuICAgICAgICAvLyBBbmRyb2lkOiBkdXJhdGlvbiBpcyBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgY29uc29sZS5sb2coYHNvbmcgZHVyYXRpb246YCwgZHVyYXRpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCk6IHZvaWQgeyBcbiAgICB0aGlzLmltZyA9IHRoaXMuYW5pbWFnZUltZ0VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGlzSU9TICYmICEocGFyc2VGbG9hdChkZXZpY2Uub3NWZXJzaW9uKSA8IDEwKSkgdGhpcy5idXp6ID0gVUlTZWxlY3Rpb25GZWVkYmFja0dlbmVyYXRvci5uZXcoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVQbGF5KCkge1xuICAgIGlmICh0aGlzLl9wbGF5ZXIuaXNBdWRpb1BsYXlpbmcoKSkge1xuICAgICAgdGhpcy5fcGxheWVyLnBhdXNlKCk7XG4gICAgICB0aGlzLnBhcnR5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcbiAgICAgIHRoaXMucGFydHlpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RyYWNrQ29tcGxldGUoYXJnczogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ3JlZmVyZW5jZSBiYWNrIHRvIHBsYXllcjonLCBhcmdzLnBsYXllcik7XG4gICAgY29uc29sZS5sb2coJ3doZXRoZXIgc29uZyBwbGF5IGNvbXBsZXRlZCBzdWNjZXNzZnVsbHk6JywgYXJncy5mbGFnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RyYWNrRXJyb3IoYXJnczogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ3JlZmVyZW5jZSBiYWNrIHRvIHBsYXllcjonLCBhcmdzLnBsYXllcik7XG4gICAgY29uc29sZS5sb2coJ3RoZSBlcnJvcjonLCBhcmdzLmVycm9yKTtcbiAgICBjb25zb2xlLmxvZygnZXh0cmEgaW5mbyBvbiB0aGUgZXJyb3I6JywgYXJncy5leHRyYSk7XG4gIH1cblxuICBwcml2YXRlIGFuaW1hdGVJbnRlcnZhbDtcbiAgc3RhcnRBbmltYXRpb24oKSB7XG4gICAgdGhpcy5hbmltYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5idXp6KSB0aGlzLmJ1enouc2VsZWN0aW9uQ2hhbmdlZCgpXG4gICAgICB0aGlzLmltZy5hbmltYXRlKHtcbiAgICAgICAgc2NhbGU6IHt4OiAyLCB5OiAyfSxcbiAgICAgICAgcm90YXRlOiA0NSxcbiAgICAgICAgZHVyYXRpb246IDI3MFxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaW1nLmFuaW1hdGUoe1xuICAgICAgICAgIHNjYWxlOiB7eDogMSwgeTogMX0sXG4gICAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiAyNzBcbiAgICAgICAgfSkudGhlbigoKSA9PiB7fSwgZXJyID0+IHt9KVxuICAgICAgfSwgZXJyID0+IHt9KVxuICAgIH0sIDU0MClcbiAgfVxuXG4gIHN0b3BBbmltYXRpb24oKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmFuaW1hdGVJbnRlcnZhbCk7XG4gIH1cbn0iXX0=