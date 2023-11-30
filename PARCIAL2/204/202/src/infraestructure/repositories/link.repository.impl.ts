import { CreateLinkDto, LinkDatasource, LinkEntity, LinkRepository, UpdateLinkDto } from '../../domain';


export class LinkRepositoryImpl implements LinkRepository {

  constructor(
    private readonly datasource: LinkDatasource,
  ) { }


  create( createLinkDto: CreateLinkDto ): Promise<LinkEntity> {
    return this.datasource.create( createLinkDto );
  }

  getAll(): Promise<LinkEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<LinkEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateLinkDto: UpdateLinkDto ): Promise<LinkEntity> {
    return this.datasource.updateById( updateLinkDto );
  }

  deleteById( id: number ): Promise<LinkEntity> {
    return this.datasource.deleteById( id );
  }

}


