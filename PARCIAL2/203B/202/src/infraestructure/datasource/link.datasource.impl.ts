import { prisma } from '../../data/postgres';
import { CreateLinkDto, LinkDatasource, LinkEntity, UpdateLinkDto } from '../../domain';



export class LinkDatasourceImpl implements LinkDatasource {

  async create( createLinkDto: CreateLinkDto ): Promise<LinkEntity> {
    const { Rol , ...rest } =  createLinkDto
    const link = await prisma.link.create({
      data: rest
    });

    return LinkEntity.fromObject( link );
  }

  async getAll(): Promise<LinkEntity[]> {
    const links = await prisma.link.findMany();
    return links.map( link => LinkEntity.fromObject(link) );
  }

  async findById( id: number ): Promise<LinkEntity> {
    const link = await prisma.link.findFirst({
      where: { id }
    });

    if ( !link ) throw `Link with id ${ id } not found`;
    return LinkEntity.fromObject(link);
  }

  async updateById( updateLinkDto: UpdateLinkDto ): Promise<LinkEntity> {
    await this.findById( updateLinkDto.id );
    
    const updatedLink = await prisma.link.update({
      where: { id: updateLinkDto.id },
      data: updateLinkDto!.values
    });

    return LinkEntity.fromObject(updatedLink);
  }

  async deleteById( id: number ): Promise<LinkEntity> {
    await this.findById( id );
    const deleted = await prisma.link.delete({
      where: { id }
    });

    return LinkEntity.fromObject( deleted );
  }

}