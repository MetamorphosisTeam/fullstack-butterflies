import { DataTypes } from "sequelize";
import db_connection from "../database/db_connection.js";

const ButterfliesModel = db_connection.define(
  "butterflies",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        // Validaciones a nivel de modelo de datos
        notEmpty: {
          msg: "El nombre no puede estar vacío.",
        },
        len: {
          args: [5, 100],
          msg: "El nombre debe tener entre 5 y 100 caracteres.",
        },
        isValidName(value) {
          if (!/^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ\s().-]+$/.test(value)) {
            throw new Error(
              "El nombre solo puede contener letras, espacios, paréntesis, guiones y puntos"
            );
          }
          const wordCount = value.trim().split(/\s+/).length;
          if (wordCount < 2 || wordCount > 5) {
            throw new Error("El nombre debe contener entre 2 y 5 palabras");
          }
        },
      },
    },
    order: {
      // 1.ORDER Este es el nombre que usará la API y el frontend
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "Lepidoptera",
      field: "order_name", // 2.ORDER_NAME Este es el nombre REAL de la columna en la base de datos
      validate: {
        isIn: {
          args: [["Lepidoptera"]],
          msg: "El orden debe ser Lepidoptera",
        },
      },
    },
    family: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La familia es obligatoria",
        },
      },
    },
    color: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        len: {
          args: [4, 150],
          msg: "El color debe tener entre 4 y 150 caracteres",
        },
      },
    },
    size: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        len: {
          args: [2, 20],
          msg: "El tamaño debe tener entre 2 y 20 caracteres",
        },
      },
    },
    origin: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: {
          args: [4, 100],
          msg: "El origen debe tener entre 4 y 100 caracteres",
        },
      },
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        len: {
          args: [4, 200],
          msg: "La ubicación debe tener entre 4 y 200 caracteres",
        },
      },
    },
    habitat: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [0, 500],
          msg: "El hábitat no puede exceder 500 caracteres",
        },
      },
    },
    plants: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [0, 500],
          msg: "Las plantas no pueden exceder 500 caracteres",
        },
      },
    },
    cycle: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [0, 500],
          msg: "El ciclo no puede exceder 500 caracteres",
        },
      },
    },
    img: {
      type: DataTypes.STRING(500),
      validate: {
        isUrl: {
          msg: "Debe ser una URL válida",
        },
        isImageUrl(value) {
          if (value && !/\.(jpg|jpeg|png|webp|gif)$/i.test(value)) {
            throw new Error(
              "La URL debe terminar en .jpg, .jpeg, .png, .webp o .gif"
            );
          }
        },
      },
    },
    fenology: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [0, 500],
          msg: "La fenología no puede exceder 500 caracteres",
        },
      },
    },
  },

  {
    // Segundo objeto que define las opciones adicionales del modelo
    tableName: "butterflies",
    timestamps: true, // Sequelize no intentará gestionar las columnas created_at y updated_at para este modelo.
    underscored: true,
    hooks: {
      // Utilidad: normalizar o sanear datos antes de guardarlos para asegurar consistencia.
      beforeValidate: (butterfly, options) => {
        if (butterfly.name) {
          // Pone en mayúscula la primera letra de cada palabra en el nombre
          butterfly.name = butterfly.name
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase());
        }
        if (butterfly.family) {
          butterfly.family = butterfly.family
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase());
        }
      },
    },
    paranoid: true, // Habilita Soft Deletes
    //deletedAt: "deleted_at",
    scopes: {
      withDeleted: {
        // Atajo para incluir registros "borrados" (soft deletes) para administradores
        paranoid: false,
      },
    },
  }
);

export default ButterfliesModel;
