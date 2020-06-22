import { LoadRemoteModuleOptions } from '../../federation-utils';

export type Microfrontend = LoadRemoteModuleOptions & {
    displayName: string;
    routePath: string;
    ngModuleName: string;
}