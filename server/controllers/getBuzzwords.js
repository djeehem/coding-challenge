import BuzzNinja from '../models/buzzNinja.js';

const getBuzzwords = async (req, res) => {

  try {
    const buzzwords = await BuzzNinja.find();
    const buzzwordCount = await BuzzNinja.count();

    res.status(200).json({
      status: 200,
      listData: buzzwords,
      countData: buzzwordCount,
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error
    });
  }
};

export { 
  getBuzzwords
};
