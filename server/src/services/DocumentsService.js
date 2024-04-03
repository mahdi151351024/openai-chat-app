import Document from "../models/data-models/Document";

export const getDocumentsService = async (req) => {
  const perPage = 5;
  const page = req.query.page ? req.query.page : 1;
  console.log('page', page);
  const documents = await Document.findAndCountAll({
    offset: (page - 1) * perPage,
    limit: perPage,
    order: [['id', 'DESC']]
  });
  return {
    message: "Documents get successfully",
    data: documents,
  };
};

export default {};
