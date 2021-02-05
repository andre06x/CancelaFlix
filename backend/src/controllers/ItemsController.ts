import Knex from '../database/connection';
import { Request, Response } from 'express';


class ItemsController {

  async create(request: Request, response: Response){
    const {
      name,
      email,
      series,
      season,
    } = request.body;

    const point = {
      image: 'https://img.ibxk.com.br/2020/08/19/19213644870074.jpg?w=1120&h=420&mode=crop&scale=both',
      name,
      email,
      series,
      season,
    }

    const insertIds = await Knex('points').insert(point);
    return response.json(point);
  }

  async teste(resquest: Request, response: Response){
    const items = await Knex('points').select('*');

    const AllItems = items.map(item => {
      return {
        id: item.id,
        name: item.name,
        email: item.email,
        series: item.serie,
        image: item.image,
        season: item.season,
      }
    });
    return response.json(items);
  }

  async index(request: Request, response: Response){
    const { id }  = request.params;

    const point = await Knex('points')
      .where('id', id)
      .first();

    if(point){
      return response.json(point);
    }
    else {
      return response.json({message: "not find"})
    }
  }
}

export default ItemsController;
