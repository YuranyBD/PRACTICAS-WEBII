import { CreateLinkDto, UpdateLinkDto } from '../dtos';
import { LinkEntity } from '../entities/link.entity';



export abstract class LinkDatasource {

  abstract create( createLinkDto: CreateLinkDto ): Promise<LinkEntity>;

  abstract getAll(): Promise<LinkEntity[]>;

  abstract findById( id: number ): Promise<LinkEntity>;
  abstract updateById( updateLinkDto: UpdateLinkDto ): Promise<LinkEntity>;
  abstract deleteById( id: number ): Promise<LinkEntity>;

}