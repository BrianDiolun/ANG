import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs:['videos'] //this is where info is going to come in from
})

export class PlaylistComponent {
    onSelect(vid:Video){
        console.log('clicked')
        console.log(JSON.stringify(vid))
    }
}
