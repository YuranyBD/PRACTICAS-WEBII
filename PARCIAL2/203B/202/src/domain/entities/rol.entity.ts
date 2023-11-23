export class RolEntity {
    private constructor(
        public readonly name: string,
      ){}
      public static fromObject(object: { [key: string]: any }): RolEntity {
        const { name } = object;
        if (!name) throw "name is required";
    
        return new RolEntity(name);
      }
}