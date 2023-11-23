import { RolEntity } from "./rol.entity";

export class LinkEntity {
  private constructor(
    public name: string,
    public Link: string,
    public rolId?: RolEntity[],
  ) {}

  get Rol() {
    return this.rolId;
  }
  public static fromObject(object: { [key: string]: any }): LinkEntity {
    const { rolId, name, Link } = object;
    if (!rolId) throw "rolId is required";
    if (!name) throw "name is required";
    if (!Link) throw "Link is required";

    return new LinkEntity(rolId, name, Link);
  }
}
