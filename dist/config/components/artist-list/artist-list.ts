import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppearIn } from './../../../src/utils/animations';
import { IListComponent } from './../../../src/components/interfaces';
import { ListParentComponent } from './../../../src/components/ListParent';

/*
  Generated class for the ActorList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'artist-list',
  templateUrl: 'artist-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [AppearIn],
})
export class ArtistListComponent extends ListParentComponent implements IListComponent {

  constructor(
    public navCtrl: NavController,
    public cdRef: ChangeDetectorRef,
  ) {
    super(navCtrl, cdRef);
  }
}

