"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._player = new nativescript_audio_1.TNSPlayer();
        this._player.debug = true;
        this._player.initFromFile({
            audioFile: '~/audio.mp3',
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
    };
    ItemsComponent.prototype.togglePlay = function () {
        console.log(this._player);
        if (this._player.isAudioPlaying()) {
            this._player.pause();
        }
        else {
            this._player.play();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdGO0FBQ3hGLHlEQUErQztBQU8vQztJQUlFO0lBRUEsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3hCLFNBQVMsRUFBRSxhQUFhO1lBQ3hCLElBQUksRUFBRSxLQUFLO1lBQ1gsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hELGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDM0MsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNOLEtBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNoRCw4QkFBOEI7Z0JBQzlCLHVDQUF1QztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG1DQUFVLEdBQWpCO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRU8sdUNBQWMsR0FBdEIsVUFBdUIsSUFBUztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU8sb0NBQVcsR0FBbkIsVUFBb0IsSUFBUztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQTVDVSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN0QyxDQUFDOztPQUNXLGNBQWMsQ0ErQzFCO0lBQUQscUJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVE5TUGxheWVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWF1ZGlvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgX3BsYXllcjogVE5TUGxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFxuICB9XG4gIFxuICBuZ09uSW5pdCgpOiB2b2lkIHsgXG4gICAgdGhpcy5fcGxheWVyID0gbmV3IFROU1BsYXllcigpO1xuICAgIHRoaXMuX3BsYXllci5kZWJ1ZyA9IHRydWU7XG4gICAgdGhpcy5fcGxheWVyLmluaXRGcm9tRmlsZSh7XG4gICAgICBhdWRpb0ZpbGU6ICd+L2F1ZGlvLm1wMycsIC8vIH4gPSBhcHAgZGlyZWN0b3J5XG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIGNvbXBsZXRlQ2FsbGJhY2s6IHRoaXMuX3RyYWNrQ29tcGxldGUuYmluZCh0aGlzKSxcbiAgICAgIGVycm9yQ2FsbGJhY2s6IHRoaXMuX3RyYWNrRXJyb3IuYmluZCh0aGlzKVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fcGxheWVyLmdldEF1ZGlvVHJhY2tEdXJhdGlvbigpLnRoZW4oZHVyYXRpb24gPT4ge1xuICAgICAgICAvLyBpT1M6IGR1cmF0aW9uIGlzIGluIHNlY29uZHNcbiAgICAgICAgLy8gQW5kcm9pZDogZHVyYXRpb24gaXMgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIGNvbnNvbGUubG9nKGBzb25nIGR1cmF0aW9uOmAsIGR1cmF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVBsYXkoKSB7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLl9wbGF5ZXIpO1xuICAgIGlmICh0aGlzLl9wbGF5ZXIuaXNBdWRpb1BsYXlpbmcoKSkge1xuICAgICAgdGhpcy5fcGxheWVyLnBhdXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BsYXllci5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHJhY2tDb21wbGV0ZShhcmdzOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygncmVmZXJlbmNlIGJhY2sgdG8gcGxheWVyOicsIGFyZ3MucGxheWVyKTtcbiAgICBjb25zb2xlLmxvZygnd2hldGhlciBzb25nIHBsYXkgY29tcGxldGVkIHN1Y2Nlc3NmdWxseTonLCBhcmdzLmZsYWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJhY2tFcnJvcihhcmdzOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygncmVmZXJlbmNlIGJhY2sgdG8gcGxheWVyOicsIGFyZ3MucGxheWVyKTtcbiAgICBjb25zb2xlLmxvZygndGhlIGVycm9yOicsIGFyZ3MuZXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKCdleHRyYSBpbmZvIG9uIHRoZSBlcnJvcjonLCBhcmdzLmV4dHJhKTtcbiAgfVxuXG5cbn0iXX0=