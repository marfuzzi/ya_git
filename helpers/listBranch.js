const listBranch = (str) => {
    return str.split('\n').filter(Boolean).map((branch)=>{
        return branch.replace('*', '').trim();
    })
};

module.exports = listBranch;
