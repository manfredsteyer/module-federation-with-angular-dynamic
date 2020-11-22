import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export type Microfrontend = LoadRemoteModuleOptions & {
    displayName: string;
    routePath: string;
    ngModuleName: string;
};
