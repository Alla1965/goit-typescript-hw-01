type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  TTop extends Pick<AllType, 'name' | 'color'>,
  TBottom extends Pick<AllType, 'position' | 'weight'>
>(top: TTop, bottom: TBottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
const obj1 = { name: 'Item A', color: 'red' };
const obj2 = { position: 1, weight: 100 };

const result = compare(obj1, obj2);
// result має тип AllType