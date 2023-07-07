import { getManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { CustomManifest } from '../utils/config';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    standalone: true,
    imports: [JsonPipe]
})
export class ConfigComponent {

  manifest = getManifest<CustomManifest>();

}
