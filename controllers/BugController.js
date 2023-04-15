import Bug  from "../models/BugModel.js";

 export const getAllBugs = async (req, res)=>{
      try {
        const bugs = await Bug.findAll()
        res.json(bugs)
      } catch (error) {
        res.json( { message: error.message } )
      }
}

export const getBugById = async (req, res)=>{
  try {
    const bug = await Bug.findAll({
      where:{ id:req.params.id }
    })
    if (bug.length === 0) {
      res.status(404).json({ "message": "Bug not found" })
    } else {
      res.json(bug)
    }
  } catch (error) {
    res.status(500).json( { "message": "Internal Server Error", "error": error.message } )
  }
}

export const createBug = async (req, res) =>{
  try {
    await Bug.create(req.body)
    res.json({"message": "Created successfully" })
  } catch (error) {
    res.status(500).json( { "message": "Internal Server Error", "error": error.message } )
  }
}

export const updateBug = async (req, res) => {
  try {
    const updatedRows = await Bug.update(req.body, {
      where: { id: req.params.id }
    })
    if (updatedRows > 0) {
      res.json({ "message": "Updated successfully" })
    } else {
      res.status(404).json({ "message": "Bug not found" })
    }
  } catch (error) {
    res.status(500).json({ "message": "Internal Server Error", "error": error.message })
  }
}

export const deleteBug = async (req, res) => {
  try {
    await Bug.destroy({
      where: { id: req.params.id }
    })
    res.json({ "message": "Deleted successfully" })
  } catch (error) {
    res.status(500).json({ "message": "Internal Server Error" })
  }
}
