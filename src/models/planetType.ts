import './temperatur'

type planetType = {
    id: number,
    type: string,
    name: string,
    latinName: string,
    rotation: number,
    circumference: number,
    temp: temperatur,
    distance: number,
    orbitalPeriod: number,
    desc: string,
    moons: string[] | undefined
}

export default planetType;