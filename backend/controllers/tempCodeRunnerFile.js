export const createCustomer = async (req, res) => {
  try {
    const { dateOfBirth, gender, occupation, identificationNumber } = req.body;

    // Membuat customer baru dengan data yang diberikan
    const newCustomer = await Customer.create({
      dateOfBirth,
      gender,
      occupation,
      identificationNumber,
      userId: req.userId, // Menggunakan userId dari pengguna yang sedang login
    });

    res.status(201).json({ msg: "Customer berhasil dibuat", customer: newCustomer });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};