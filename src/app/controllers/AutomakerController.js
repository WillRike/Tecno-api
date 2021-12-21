import * as Yup from 'yup';

import Automaker from '../models/Automaker';

class AutomakerController{

  async store(req, res){
    const schema = Yup.object().shape({
      automaker_name: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Validation Fails'});
    }

    const automakerExists = await Automaker.findOne({where: {automaker_name: req.body.automaker_name}});

    if(automakerExists){
      return res.status(400).json({error: 'Já existe montadora com este nome!'})
    }

  const automaker =  await Automaker.create(req.body);    

  return res.json({
    automaker,
  });
  }

  async index(req, res){
    const automakers = await Automaker.findAll({
    });
    return res.json(automakers);
  }

  async update(req,res){
    const schema = Yup.object().shape({
      automaker_name: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Validation Fails'});
    }

    const {id, automaker_name} = req.body;

    //verifica se existe a montadora
    const automakerExists = await Automaker.findOne({where: {id: id}});
    if(!automakerExists){
      return res.status(400).json({error: 'Não existe essa montadora!'});
    }

    //Verifica se o nome passado é igual ao existente
    const currentAutomakerName = automakerExists.automaker_name;
    console.log(currentAutomakerName);
    console.log(automaker_name);

    if(automaker_name === currentAutomakerName){
      return res.status(400).json({error: "O nome passado é igual ao existente!"});
    }

    //Atualiza no BD o novo nome da montadora
    const automaker = await Automaker.update(req.body,{
      where: {id: req.body.id},
    });
    
    return res.json("Atualizado com Sucesso!");

  }

}

export default new AutomakerController();