import { CreateLinkDto } from '../../dtos';
import { LinkEntity } from '../../entities/link.entity';
import { LinkRepository } from '../../repositories/link.repository';


export interface CreateLinkUseCase {
  execute( dto: CreateLinkDto ): Promise<LinkEntity>
}

// ctrl+ shift + l
export class CreateLink implements CreateLinkUseCase {
  
  constructor(
    private readonly repository: LinkRepository,
  ) {}
  
  execute( dto: CreateLinkDto ): Promise<LinkEntity> {
    return this.repository.create(dto);
  }

}

