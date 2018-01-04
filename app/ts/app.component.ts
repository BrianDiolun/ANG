import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos: Array <Video>;
        constructor(){
            this.videos = [
                new Video(1, 'Xerox', 'BzYWl6Ji1jg' , '1'),
                new Video(2, 'Endless', 'Kyez8QxweSc' , '1'),
                new Video(3, 'Caretaker', 'LL998ajnjN4&t=2184s' , '1')
            ]
        }
}
