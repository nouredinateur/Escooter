export interface Iavailabilities {
  bikes: number;
  stands: number;
  mechanicalBikes: number;
  electricalBikes: number;
  electricalInternalBatteryBikes: number;
  electricalRemovableBatteryBikes: number;
}

export interface Iposition {
  latitude: number;
  longitude: number;
}

export interface ItotalStands {
  availabilities: Iavailabilities;
  capacity: number;
}

export interface ImainStands {
  availabilities: Iavailabilities;
  capacity: number;
}

export interface IstationState {
  name: String;
  contractName: String;
  address: String;
  position: Iposition;
  banking: boolean;
  bonus: boolean;
  status: String;
  lastUpdate: String;
  connected: boolean;
  overflow: boolean;
  shape: any;
  totalStands: ItotalStands;
  mainStands: any;
  overflowStands: any;
}
