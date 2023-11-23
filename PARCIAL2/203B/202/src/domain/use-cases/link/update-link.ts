import { UpdateLinkDto } from '../../dtos';
import { LinkEntity } from '../../entities/link.entity';
import { LinkRepository } from '../../repositories/link.repository';


export interface UpdateLinkUseCase {
  execute( dto: UpdateLinkDto ): Promise<LinkEntity>
}


export class UpdateLink implements UpdateLinkUseCase {
  
  constructor(
    private readonly repository: LinkRepository,
  ) {}
  
  execute( dto: UpdateLinkDto ): Promise<LinkEntity> {
    return this.repository.updateById(dto);
  }

}

