export interface DataRecord {
  [k: string]: string | string[] | number | number[] | boolean | DataRecord | DataRecord[];
}
