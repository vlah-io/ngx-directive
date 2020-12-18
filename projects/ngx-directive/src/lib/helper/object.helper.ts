export class ObjectHelper {
  static isString(val: any): boolean {
    return Object.prototype.toString.call(val) === '[object String]';
  }
}
