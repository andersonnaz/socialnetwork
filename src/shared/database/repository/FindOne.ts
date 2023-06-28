export interface FindOne<T> {
  findOne(id: string): T | undefined;
}
