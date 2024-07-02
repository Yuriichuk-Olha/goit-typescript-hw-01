//generic Pick

type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
}
type UserAll = Pick<AllType, 'name' | 'color'>
type PositionAll = Pick<AllType, 'position' | 'weight'>
function compare (top:UserAll, bottom:PositionAll):AllType {
 return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
    }
    console.log(compare)
}