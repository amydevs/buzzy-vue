import { ButtplugClient, ButtplugClientDevice } from "buttplug";
import { createStore } from "vuex";

export interface ButtplugStoreState {
    client: ButtplugClient;
    devices: ButtplugClientDevice[];
}

const buttplugStore = createStore<ButtplugStoreState>({
    // state: () => {
    //     return {
    //         client: new ButtplugClient(),
    //         devices: []
    //     }
    // },
    // mutations: {
    //     addDevice(state, device: ButtplugClientDevice) {
    //         state.devices.push(device) 
    //     },
    //     removeDevice(state, device: ButtplugClientDevice) {
    //         state.devices.filter((d) => d.Index !== device.Index)
    //     }
    // }

});

// buttplugStore.state.client.on('deviceadded', (e) => buttplugStore.commit("addDevice", e));
// buttplugStore.state.client.on('deviceremoved', (e) => buttplugStore.commit("removeDevice", e));

export default buttplugStore;