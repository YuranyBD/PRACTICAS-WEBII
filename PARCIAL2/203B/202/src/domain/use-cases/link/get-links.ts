import { LinkEntity } from '../../entities/link.entity';
import { LinkRepository } from '../../repositories/link.repository';


export interface GetLinksUseCase {
  execute(): Promise<LinkEntity[]>
}


export class GetLinks implements GetLinksUseCase {
  
  constructor(
    private readonly repository: LinkRepository,
  ) {}
  
  execute(): Promise<LinkEntity[]> {
    return this.repository.getAll();
  }

}

