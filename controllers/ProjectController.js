import  Project  from "../models/ProjectModel.js"

export const getAllProjects = async (req, res)=>{
    try {
      const projects = await Project.findAll()
      res.json(projects)
    } catch (error) {
      res.json( { message: error.message } )
    }
}

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    res.json(project);
  } catch (error) {
    res.json({ message: error.message });
  }
};

