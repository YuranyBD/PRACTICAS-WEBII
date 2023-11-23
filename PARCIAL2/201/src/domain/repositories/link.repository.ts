import { CreateLinkDto, UpdateLinkDto } from '../dtos';
import { LinkEntity } from '../entities/link.entity';



export abstract class LinkRepository {

  abstract create( createLinkDto: CreateLinkDto ): Promise<LinkEntity>;

  abstract getAll(): Promise<LinkEntity[]>;

  abstract findById( id: number ): Promise<LinkEntity>;
  abstract updateById( updateTodoDto: UpdateLinkDto ): Promise<LinkEntity>;
  abstract deleteById( id: number ): Promise<LinkEntity>;

}