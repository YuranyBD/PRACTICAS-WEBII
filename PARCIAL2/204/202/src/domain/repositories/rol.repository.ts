import { CreateRolDto, UpdateRolDto } from '../dtos';
import { RolEntity } from '../entities/rol.entity';



export abstract class RolRepository {

  abstract create( createLinkDto: CreateRolDto ): Promise<RolEntity>;

  abstract getAll(): Promise<RolEntity[]>;

  abstract findById( id: number ): Promise<RolEntity>;
  abstract updateById( updateRolDto: UpdateRolDto ): Promise<RolEntity>;
  abstract deleteById( id: number ): Promise<RolEntity>;

}