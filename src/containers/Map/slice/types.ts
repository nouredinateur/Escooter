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
  name?: String;
  contract_name?: String;
  address?: String;
  position?: Iposition;
  banking?: boolean;
  bonus?: boolean;
  status?: String;
  available_bikes?: number;
  bike_stands?: number;
  lastUpdate?: String;
  connected?: boolean;
  overflow?: boolean;
  shape?: any;
  totalStands?: ItotalStands;
  mainStands?: any;
  overflowStands?: any;
}

export interface IreducerState {
  error: boolean;
  loading: boolean;
  cityName: string;
  cityLocation: any;
  station: IstationState;
}
