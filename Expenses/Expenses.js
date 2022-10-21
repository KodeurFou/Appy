
//const GroupUser = ;
const GroupUserTemp = [{"name":"Arthur","exp":82},{"name":"Thomas","exp":17},{"name":"Rat","exp":0}]
function GetTotal(){
    var total=0;
    for (let user of GroupUserTemp){
        total+=user.exp;
    }
    console.log(total)
    return total
}
function SetBalance(total){
    totalPerUser=total/GroupUserTemp.length

    for (let user of GroupUserTemp){
        var balance=0;
        balance=user.exp-totalPerUser;
        user["balance"]=balance;
        console.log(user.balance)
    }
}
function YourCut(){
    PosUser=[];

    for (let user of GroupUserTemp){
        if(user.balance>0){
            PosUser.push(user)
        }
    }
    while (PosUser.length>0){
        for (let user of GroupUserTemp){
            if(user.balance===0 || user in PosUser){
                continue;
            }
            else{

            }
        }
    }
}
function main(){
    total=GetTotal();
    SetBalance(total);
    YourCut();

}
main();