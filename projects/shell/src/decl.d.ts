declare module 'mfe1/Component';
declare module 'mfe1/Module';

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: string };

type Factory = () => any;

type Container = {
    init(shareScope: string): void;
    get(module: string): Factory;
};