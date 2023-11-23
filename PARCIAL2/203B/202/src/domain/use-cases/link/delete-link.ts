import { LinkEntity } from '../../entities/link.entity';
import { LinkRepository } from '../../repositories/link.repository';


export interface DeleteLinkUseCase {
  execute( id: number ): Promise<LinkEntity>
}

export class DeleteLink implements DeleteLinkUseCase {
  
  constructor(
    private readonly repository: LinkRepository,
  ) {}
  
  execute( id: number ): Promise<LinkEntity> {
    return this.repository.deleteById(id);
  }

}

