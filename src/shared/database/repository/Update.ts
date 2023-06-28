export interface Update<T> {
  update(id: string, param: Partial<T>): T;
}
