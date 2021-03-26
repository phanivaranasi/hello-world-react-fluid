import { ContainerRuntimeFactoryWithDefaultDataStore } from "@fluidframework/aqueduct";

import { UserLangInitFactory } from './fluidComponents/';



export const AppContainerFactory = new ContainerRuntimeFactoryWithDefaultDataStore(
    UserLangInitFactory,
    new Map(
        [
            UserLangInitFactory.registryEntry as any,
        ])
);