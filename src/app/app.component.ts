// /// <reference path="../../typings/index.d.ts" />

// import Controls = require('VSS/Controls');
// import VSS_Service = require('VSS/Service');
// import TFS_Build_Contracts = require('TFS/Build/Contracts');
// import TFS_Build_Extension_Contracts = require('TFS/Build/ExtensionContracts');

import * as VSS_Service from 'VSS/Service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works indeed 2!';
}
