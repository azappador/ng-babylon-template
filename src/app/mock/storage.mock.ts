export class StorageMock implements Storage {
  public length = 0;
  public clear(): any { return null; }
  public getItem(key: string): any { return null; }
  public key(index: number): any { return null; }
  public removeItem(key: string): any { return null; }
  public setItem(key: string, value: string): any { return null; }
}
