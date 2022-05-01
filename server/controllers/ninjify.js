import BuzzNinja from '../models/buzzNinja.js';

const getBuzzNinja = async (req, res) => {

  const { x } = req.query;
  const buzzwords = x.split(",");

  try {
    const buzzNinjas = await BuzzNinja.find({buzzWord: buzzwords});

    let names = [];
    for (let buzzNinja of buzzNinjas) { names.push(buzzNinja.ninjaName) }  
    const ninjaName = names.join(" ");

    res.status(200).json({
      status: 200,
      data: ninjaName
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error
    });
  }
};

export { 
  getBuzzNinja
};
