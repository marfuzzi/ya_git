class Branch {

    getListBranch(str) {
        return str.split('\n').filter(Boolean).map((branch)=>{
            return branch.replace('*', '').trim();
        });
    }
}
const branch = new Branch();

module.exports = branch;
