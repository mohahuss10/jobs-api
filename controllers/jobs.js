const getAllJobs = async(req,res)=>{
    res.send('get all jobs')
}

const getJob = async(req,res)=>{
    res.send('get single job')
}

const  createJob = async(req,res) =>{
    res.send('create job')
}

const  updateJob = async(req,res) =>{
    res.send('updatee jon')
}

const  deleteJob = async(req,res) =>{
    res.send('delete jon')
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}