export interface CheckAuthor {
  checkUserIsAuthor(entityId: string, userId: string): Promise<boolean>;
}
