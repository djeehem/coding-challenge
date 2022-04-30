import BuzzNinja from '../models/buzzNinja.js';

const getBuzzNinja = async (req, res) => {

  const { x } = req.query;
  console.log(x)
  const buzzwords = x.split(",");
  console.log(`buzzwords: ${buzzwords}`)
  try {
    console.log(`requested buzzword(s) : ${buzzwords}`);
    const buzzNinjas = await BuzzNinja.find({buzzWord: buzzwords});

    console.log(`buzzNinjas: ${buzzNinjas}`);
    let names = [];
    for (let buzzNinja of buzzNinjas) { names.push(buzzNinja.ninjaName) }
    console.log(`ninja name(s) found : ${names}`);   
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
