type Planet = {
    circumference: number,
    desc: string,
    distance: number,
    id: number,
    latinName: string,
    moons: [],
    name: string,
    orbitalPeriod: number,
    rotation: number,
    temp: { day: number,
        night: number},
    type: string,
}

export default Planet;