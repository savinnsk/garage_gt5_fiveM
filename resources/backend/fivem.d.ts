
declare module 'fivem' {
    export function RegisterCommand(name: string, handler: (source: number, args: string[]) => void, restricted?: boolean): void;
    export function GetPlayerPed(index: number): number;
    export function GetHashKey(key: string): number;
    export function RequestModel(model: number): void;
    export function HasModelLoaded(model: number): boolean;
    export function CreateVehicle(model: number, x: number, y: number, z: number, heading: number, isNetwork: boolean, thisScriptCheck: boolean): number;
    export function TaskWarpPedIntoVehicle(ped: number, vehicle: number, seatIndex: number): void;
    export function SetVehicleNumberPlateText(vehicle: number, plateText: string): void;
    export function GetEntityCoords(entity: number, forPlayer: boolean): [number, number, number];
    export function GetEntityHeading(entity: number): number;
    export function SetNuiFocus(hasFocus: boolean, hasCursor: boolean): void;
    export function SendNuiMessage(message: string): void;
    export function RegisterNuiCallbackType(type: string): void;
    export function on(type: string, callback: (data: any, cb: (response: any) => void) => void): void;
    export function emit(eventName: string, ...args: any[]): void;
  }