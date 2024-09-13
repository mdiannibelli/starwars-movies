'use server';

import { VehicleType } from "@/types";

export async function getVehicles(vehicles:string[]):Promise<VehicleType[]> {
    const vehiclesPromises = vehicles.map((vehicle) => fetch(vehicle).then(res => res.json()));
    return await Promise.all(vehiclesPromises);
}