import { ButtplugClient } from "buttplug";
import { InjectionKey } from "vue";

export const clientKey: InjectionKey<ButtplugClient> = Symbol("client");