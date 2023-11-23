import { LinkEntity } from '../../entities/link.entity';
import { LinkRepository } from '../../repositories/link.repository';


export interface GetLinkUseCase {
  execute( id: number ): Promise<LinkEntity>
}


export class GetLink implements GetLinkUseCase {
  
  constructor(
    private readonly repository: LinkRepository,
  ) {}
  
  execute( id: number ): Promise<LinkEntity> {
    return this.repository.findById(id);
  }

}

