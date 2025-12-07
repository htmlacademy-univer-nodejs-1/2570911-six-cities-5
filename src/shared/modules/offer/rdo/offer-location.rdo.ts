import { Expose } from "class-transformer";

export class OfferLocationRdo {
  @Expose()
  public latitude!: number;

  @Expose()
  public longitude!: number;
}