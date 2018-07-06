import { Component } from '@angular/core';
import { ItemPage } from '../../src/pages/item/item';

@Component({
    selector: 'page-music-item',
    templateUrl: '../../src/pages/item/item.html'
})
export class ItemMusicPage extends ItemPage {
    type: string = 'music';
}