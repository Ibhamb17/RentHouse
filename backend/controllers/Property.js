import Property from "../models/PropertyModel.js";
import User from "../models/UserModel.js";

export const getPropertys = async (req, res) => {
  try {
    // Mengambil semua properti
    const propertys = await Property.findAll();

    res.json(propertys);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getPropertybyId = async (req, res) => {
  const { id } = req.params;

  try {
    // Mengambil properti berdasarkan ID
    const property = await Property.findOne({ where: { id } });
    if (!property) {
      return res.status(404).json({ msg: "Properti tidak ditemukan" });
    }

    res.json(property);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};


  export const createProperty = async(req, res) =>{

    const {propertyName, propertyAddress, propertyDescription} = req.body;
    try {
        await Property.create({
           propertyName:propertyName,
            propertyAddress: propertyAddress,
            propertyDescription: propertyDescription,
            userId: req.userId
        });
        res.status(201).json({msg: "Property Berhasil ditambahkan"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
  

export const updateProperty = async (req, res) => {
  const { id } = req.params;

  try {
    // Verifikasi properti berdasarkan ID
    const property = await Property.findOne({ where: { id } });
    if (!property) {
      return res.status(404).json({ msg: "Properti tidak ditemukan" });
    }

    // Lakukan update properti
    await property.update(req.body);

    res.json({ msg: "Properti berhasil diperbarui" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updatePropertybyId = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
  
    try {
      const property = await Property.findOne({ where: { id, userId } });
      if (!property) {
        return res.status(404).json({ msg: "Properti tidak ditemukan" });
      }
  
      await property.update(req.body);
  
      res.json({ msg: "Properti berhasil diperbarui" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  
  export const deleteProperty = async (req, res) => {
    const propertyId = req.params.id;
    const userId = req.userId;
  
    try {
      const property = await Property.findOne({
        where: {
          id: propertyId,
          userId: userId,
        },
      });
  
      if (!property) {
        return res.status(404).json({ msg: "Property tidak ditemukan" });
      }
  
      if (property.userId !== userId) {
        return res.status(403).json({ msg: "Property ini bukan milik Anda" });
      }
  
      await property.destroy();
  
      res.status(200).json({ msg: "Property berhasil dihapus" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  