# What Is NativeScript
When I became a new dad, I had a lot of ideas for how to make certain aspects of parenting easier. So my portfolio of ideas 
in my head that I would never act on grew exponentially. Part of why I would never act on them is I didn’t believe I had the 
skills to make sophisticated applications. I was a web developer. I knew javascript, HTML, some PHP, basic tools for creating 
basic websites. I had a great idea, but I knew it didn’t make sense unless it was an app on mobile phones. 

I started fooling around with Cordova. I realized quickly that I didn’t want to create hybrid mobile apps, because I’ve used 
them before and I hate them. They don’t feel right. It was then that I discovered NativeScript. NativeScript lets you utilize 
web technologies to create entirely native mobile experiences. You use XML/HTML, CSS, and JavaScript/TypeScript to create cross 
platform (iOS and Android) mobile applications. 


NativeScript comes in 3 flavors: Vanilla JS, Angular, and Vue. In this little demo I’m going to use Angular. To get start super 
quickly in NativeScript, you can use the NativeScript Playground, which is a web editor that lets you load a NativeScript 
application on your device basically immediately. I’m going to use the NativeScript CLI and VSCode.

The first step is to install NativeScript globally, follow these instructions: https://docs.nativescript.org/start/quick-setup

Once thats all set up, you can use the NativeScript CLI to create a new project. My app is going to throw a little party for the 
user, so I’m going to call it party. In this app we are going to integrate a plugin, do some animations, and access some native iOS APIs. 

`tns create party --ng`

In that command, we are creating an app named party, and instruction the CLI to use the angular template. Once thats created, we 
can run the app right away by opening up an iOS simulator and typing 

`tns run ios`

That will open up our new native application in the iOS simulator. The basic template includes a main view with a ListView listing 
some soccer players. It also includes a detail view so you can get an example of routing to new views in NativeScript/Angular. 
NativeScript provides a bunch of useful templates, and also provide a GUI for their CLI called NativeScript Sidekick. I typically 
just use the CLI, but the GUI is good for browsing available templates for projects. 

This app we are making is very simple so we won’t need any fancy templates. What I want to do with this app is brighten up your 
day with some music and confetti, and then add a little surprise. 

# Layouts
NativeScript provides a few different layouts to get started organizing your app. You can learn about all of them here. For this 
app, we are going to use GridLayout. GridLayout is great because it will adapt to the size of the device so your app will work 
the same on an iPad Pro or some tiny Android device. For this app we aren’t going to use an ActionBar, so we can remove the ActionBar 
from items.component, change the StackLayout over to a GridLayout and remove the list of soccer players, and lets add a Label so 
we can be sure we are seeing things correctly. Our item.component.html file looks like this: 


```
<GridLayout class="page">
  <Label text="Hello world."></Label>
</GridLayout>
```

Ok this works but doesn’t do much. Lets at least make it look a little nicer. This is a party app, so lets add a disco ball. 

```
<GridLayout class="page">
  <Image src="https://thump-images.vice.com/images/articles/meta/2015/06/04/meet-me-under-the-disco-ball-a-history-of-nightlifes-most-enduring-symbol-1433388224.jpg"></Image>
  <Label color="white" text="Hello world."></Label>
</GridLayout>
```



One note on GridLayouts: Any view inside a GridLayout is assigned a column and a row. In this case we havent defined any, so every view inside the GridLayout is currently assigned to column `0` and row `0`. So, since both the `Image` and the `Label` are occupying the same space in the `GridLayout`, they will be stacked on top of each other. So since the `Label` comes after the `Image` in the markup, the `Label` will show up on top of the `Image`. Lets make the `Label` white so we can see it better: `<Label color="white" text="Hello world."></Label>`

<img src="https://cl.ly/af9740be71dc/Screen%252520Shot%2525202019-02-04%252520at%25252010.44.43%252520AM.png" height="500">

Ok this looks a little funny. What the image tries to do by default is display it at the size of its container (in this case the whole screen), but in its original aspect ratio. I want this image to be like a background image, so we can use the `stretch` property on the `Image` to get what we want:

```
<Image stretch="aspectFill" src="https://thump-images.vice.com/images/articles/meta/2015/06/04/meet-me-under-the-disco-ball-a-history-of-nightlifes-most-enduring-symbol-1433388224.jpg"></Image>
```

`stretch="aspectFill"` will fill the image to its container, but not stretch it out of its aspect ratio. 

<img src="https://cl.ly/9ae83fb3b067/Screen%252520Shot%2525202019-02-04%252520at%25252010.45.48%252520AM.png" height="500">

Ok definitely better. But those white bars at the top and bottom are ugly, lets get rid of them. NativeScript 5.0 comes with some APIs that make working with iOS Safe Areas a breeze. Layouts are considered an element that should stretch to the edge of the screen. We can see this if we for example add a green background to the GridLayout, the white bars become green. Content, however, are padded from the edges of the device so they dont conflict with the rounded corners, the notch, or the status bar. Images are considered content. In this case, this image is not content that will conflict as we are using it as a background image, so we can tell NativeScript to extend the edges of this image to the edges of the device with the `iosOverflowSafeArea` property:


```
<Image iosOverflowSafeArea="true" stretch="aspectFill" src="https://thump-images.vice.com/images/articles/meta/2015/06/04/meet-me-under-the-disco-ball-a-history-of-nightlifes-most-enduring-symbol-1433388224.jpg"></Image>
```

<img src="https://cl.ly/32e33d2c9750/Screen%252520Shot%2525202019-02-04%252520at%25252010.50.08%252520AM.png" height="500">

Much better!!

# Plugins
This is not a party without music. Lets add a plugin.

NativeScript plugins are node packages that implement various cross platform functionality. For example, in order to access a device's camera to take pictures or video, you would use the `nativescript-camera` plugin. There are all sorts of awesome NativeScript plugins out there, and you can browse them on npm.

We are going to use `nativescript-audio` to get the party started. 

To install a plugin:
`tns plugin add nativescript-audio`

Then follow the plugin's instructions to incorporate into your project. If you visit the plugin's npm package page or the github page, the instructions are in the ReadMe (https://github.com/nstudio/nativescript-audio). 

We can literally copy the demo into our `items.component.ts` file. The demo includes some useful logging for debugging and everything we need to play our audio file. I've placed the audio file in the app folder, so we reference the file in the `init` method. Here's the whole file with the audio code all set up:


```
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
  
  ngOnInit(): void {}

  public togglePlay() {
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

```

So we've got our audio setup, and now we just need some way to start this party. Let's add a button to the html file to
start the party:

```
<GridLayout class="page">
  <Image iosOverflowSafeArea="true" stretch="aspectFill" src="https://thump-images.vice.com/images/articles/meta/2015/06/04/meet-me-under-the-disco-ball-a-history-of-nightlifes-most-enduring-symbol-1433388224.jpg"></Image>
  <Button text="Let's Party" (tap)="togglePlay();" style="height: 50; width: 200; font-weight: bold; color: white; text-align: center; background-color: purple; padding: 10; border-radius: 5;"></Button>
</GridLayout>
```

Notice the new button there that calls the method in the class. I've added some inline styling just to keep things brief, but typically everything should be kept in `app.css`, or in `scss` files. 
