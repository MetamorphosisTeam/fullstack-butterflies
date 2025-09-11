import ButterfliesModel from "../models/ButterfliesModel.js";
import { Op } from "sequelize";

// Obtener todas las mariposas
export const getAllButterflies = async (req, res) => {
    try {
        const butterflies = await ButterfliesModel.findAll();
        res.status(200).json(butterflies);
    } catch (error) {
        console.error("Error Sequelize en getAllButterflies:", error);
        res.status(500).json({ message: error.message });
    }
}

// Obtener mariposa por ID
export const getById = async (req, res) => {
    try {
        const butterfly = await ButterfliesModel.findByPk(req.params.id);

        if (!butterfly) {
            return res.status(404).json({ error: "No encontrada" });
        }

        res.status(200).json(butterfly);
    } catch (error) {
        console.error("Error Sequelize en getById:", error);
        res.status(500).json({message: error.message });
    }
}

// Crear una nueva mariposa
export const createButterfly = async (req, res) => {
    try {
        const newButterfly = await ButterfliesModel.create(req.body);
        console.log("newButterfly creado:", newButterfly);
        res.status(201).json({
            ok: true,
            msg: "Mariposa creada correctamente",
            data: newButterfly
        });
    } catch (error) {
        console.error("Error Sequelize en createButterfly:", error);

        res.status(500).json({ ok: false, message: error.message });
    }
}

// Actualizar informacion de una mariposa por ID
export const updateButterfly = async (req, res) => {
    try {
        const { id } = req.params;
        const butterfly = await ButterfliesModel.findByPk(id);
        if (!butterfly) {
            return res.status(404).json({ ok: false, msg: "Mariposa no encontrada" });
        }
        await butterfly.update(req.body);
        res.status(200).json({
            ok: true,
            msg: "Mariposa actualizada correctamente",
            data: butterfly
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar mariposa por ID
export const deleteButterfly = async (req, res) => {
    try {
        const { id } = req.params;
        const butterfly = await ButterfliesModel.findByPk(id);
        if (!butterfly) {
            return res.status(404).json({ ok: false, msg: "Mariposa no encontrada" });
        }
        await butterfly.destroy();
        res.status(200).json({
            ok: true,
            msg: "Mariposa eliminada correctamente"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//-------------------------- SCOPE DELETED BUTTERFLIES: solo para admins---------------------
// Esta función usa el scope 'withDeleted' para obtener todos los registros (incluyendo los soft delete).
export const getAllButterfliesForAdmin = async (req, res) => {
  try {
    const allButterflies = await ButterfliesModel.scope('withDeleted').findAll();
    res.status(200).json(allButterflies);
  } catch (error) {
    console.error("Error getting records for admin:", error);
    res.status(500).json({ error: "Error al obtener los registros para el administrador" });
  }
};


// Obtener mariposa borrada por ID
export const getDeletedButterfly = async (req, res) => {
  try {
    const butterfly = await ButterfliesModel.scope('withDeleted').findByPk(req.params.id);
    res.status(200).json(butterfly);
  } catch (error) {
    console.error("Error Sequelize en getById:", error);
    res.status(500).json({ error: "Error al obtener mariposa" });
  }

}

// Obtener solo mariposas eliminadas (soft deleted)
export const getDeletedButterflies = async (req, res) => {
  try {
    const deleted = await ButterfliesModel.findAll({
      paranoid: false,
      where: {
        deletedAt: {
          [Op.ne]: null
        }
      }
    });

    res.json(deleted);
  } catch (error) {
    console.error("Error al obtener mariposas eliminadas:", error);
    res.status(500).json({ error: "No se pudieron obtener las mariposas eliminadas" });
  }
};
