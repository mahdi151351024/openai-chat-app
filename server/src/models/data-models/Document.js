import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Document = sequelize.define(
  "Document",
  {
    usersQuery: { type: DataTypes.TEXT, allowNull: false },
    openAiResponse: { type: DataTypes.TEXT, allowNull: true },
    responseSuccess: { type: DataTypes.BOOLEAN, defaultValue: false },
    log: { type: DataTypes.STRING(200), allowNull: true }
  },
  {
    tableName: "documents",
    timestamps: true,
  }
);
 
export default Document;
