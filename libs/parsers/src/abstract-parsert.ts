export abstract class AbstractParser<T> {
  abstract fromJson(json: string): T;
  abstract toJson(entity: T): string;
}
