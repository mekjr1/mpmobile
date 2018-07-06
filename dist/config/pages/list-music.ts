import { Component } from '@angular/core';
import { ListPage } from '../../src/pages/list/list';

@Component({
    selector: 'page-music-list',
    templateUrl: '../../src/pages/list/list.html'
})
export class ListMusicPage extends ListPage {
    type: string = 'music';
}