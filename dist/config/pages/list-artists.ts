import { Component } from '@angular/core';
import { ListPage } from '../../src/pages/list/list';

@Component({
    selector: 'page-artists-list',
    templateUrl: '../../src/pages/list/list.html'
})
export class ListArtistsPage extends ListPage {
    type: string = 'artist';
}