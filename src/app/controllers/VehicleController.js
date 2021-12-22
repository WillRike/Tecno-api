import * as Yup from 'yup';
 
import Vehicle from '../models/Vehicle';
import Automaker from '../models/Automaker';

class VehicleController {
  async store(req, res){
    const schema = Yup.object().shape({
      vehicle_name: Yup.string().required(),
      id_automaker: Yup.number().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Validation Fails'});
    }

    //Verifica se existe uma montadora com este ID
    const idAutomakerExists = await Automaker.findOne({where: { id: req.body.id_automaker}});
    
    if(!idAutomakerExists){
      return res.status(400).json({error: 'Não exite montadora com este ID'});
    }

    //Verifica se o veicula ja esta cadastrado
    const vehicleExists = await Vehicle.findOne({where: {vehicle_name: req.body.vehicle_name}});

    if(vehicleExists){
      return res.status(400).json({error: 'Este veiculo já está cadastrado!'});
    }

  const vehicle =  await Vehicle.create(req.body);    

  return res.json(
    vehicle,
  );
  }

  async index(req, res){
    const vehicles = await Vehicle.findAll({
      attributes: ['id', 'vehicle_name'],
      include: [
        {
          model: Automaker,
          as: 'automaker',
          attributes: ['id','automaker_name'],
        },
      ]
    });
    return res.json(vehicles);
  }

  async update(req, res){
    const schema = Yup.object().shape({
      id_automaker: Yup.number().required(),
      vehicle_name: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Validation Fails'});
    }

    const {ìd, vehicle_name, id_automaker} = req.body;

    
    //verifica se existe a montadora cadastrada
    const automakerExists = await Automaker.findOne({where: id_automaker});
    if(!automakerExists){
      return res.status(400).json({error: 'Não existe a montadora!'});
    }
    
    //Verifica se existe o veiculo cadastrado
    const vehicleExists = await Vehicle.findOne({where: req.body.id });

    if(!vehicleExists){
      return res.status(400).json({error: 'Não existe esse veiculo cadastrado!'});
    }

    //Verifica se o usuario passou as mesmas informaçoes ja cadastradas
    if(vehicle_name === vehicleExists.vehicle_name && id_automaker === automakerExists.id){
      return res.status(400).json({error: 'Os dados passados são iguais aos existente!'})
    }

     //Atualiza no BD o novo nome da montadora
      await Vehicle.update({vehicle_name, id_automaker},{
      where: {id: req.body.id},
    });
    
    return res.json("Atualizado com Sucesso!");



  }
}

export default new VehicleController();
