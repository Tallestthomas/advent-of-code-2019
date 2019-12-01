import { inputs } from './day1.json'

// Part 1
const getFuel: Function = (mass: number) => Math.floor(mass / 3) - 2;

const calculateTotalFuel: Function = () => inputs.map((val: number) => getFuel(val))
.reduce((a: number, b:number) => a+b, 0);

console.log(calculateTotalFuel());

// Part 2
const getFuelRecursive: Function = (mass: number) => {
  const fuel = Math.floor(mass / 3) -2;
  return fuel > 0 ? fuel + getFuelRecursive(fuel) : 0;
}

const calculateTotalFuelRecursive: Function = () => inputs
.map((val: number) => getFuelRecursive(val))
.reduce((a: number, b:number) => a+b, 0);

console.log(calculateTotalFuelRecursive());
