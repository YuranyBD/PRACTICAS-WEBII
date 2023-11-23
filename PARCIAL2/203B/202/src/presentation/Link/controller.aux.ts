// DDD
import { Request, Response } from 'express';
import { CreateLinkDto, UpdateLinkDto } from '../../domain/dtos';
import { LinkRepository } from '../../domain/repositories/link.repository';


export class LinksController {

  //* DI
  constructor(
    private readonly linkRepository: LinkRepository,
  ) { }


  public getLinks = async ( req: Request, res: Response ) => {
    const links = await this.linkRepository.getAll();
    return res.json( links );
  };

  public getLinkById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const link = await this.linkRepository.findById( id );
      res.json( link );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createLink = async ( req: Request, res: Response ) => {
    const [ error, createLinkDto ] = CreateLinkDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const link = await this.linkRepository.create( createLinkDto! );
    res.json( link );

  };

  public updateLink = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateLinkDto ] = UpdateLinkDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedLink = await this.linkRepository.updateById( updateLinkDto! );
    return res.json( updatedLink );

  };


  public deleteLink = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedLink = await this.linkRepository.deleteById( id );
    res.json( deletedLink );

  };



}