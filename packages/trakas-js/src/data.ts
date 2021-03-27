import isEqual from "lodash.isequal";

export type DataObject<T> = {
  [id in string | number]: T;
};

export function normalizeByKey<T>(data: T[], key: keyof T): DataObject<T> {
  return data.reduce<DataObject<T>>((nodes, current) => {
    const id = (current[key] as unknown) as string | number;
    nodes[id] = current;
    return nodes;
  }, {});
}

export function subtractData<T>(
  data: T[],
  dataObject: DataObject<T>,
  key: keyof T
): DataObject<T> {
  const normalizedData = normalizeByKey(data, key);
  for (const key in dataObject) {
    // TODO: Warning: Possible iteration over unexpected (custom / inherited) members,
    //  probably missing hasOwnProperty check. <---- Need to be resolved
    if (normalizedData[key]) {
      delete normalizedData[key];
    }
  }

  return normalizedData;
}

export function isEqualExcept<
  L extends DataObject<any>,
  R extends DataObject<any>
>(leftObject: L, rightObject: R, excepts: (keyof (L & R))[] = []): boolean {
  const newLeftObject = { ...leftObject } as L & Partial<R>;
  const newRightObject = { ...rightObject } as R & Partial<L>;

  for (const except of excepts) {
    newLeftObject[except] = undefined as never;
    newRightObject[except] = undefined as never;
  }

  return isEqual(newLeftObject, newRightObject);
}
