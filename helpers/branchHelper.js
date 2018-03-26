class BranchHelper {

    getListBranch(str) {
        return str.split('\n').filter(Boolean).map((branch)=>{
            return branch.replace('*', '').trim();
        });
    }
}
const branchHelper = new BranchHelper();

module.exports = branchHelper;
