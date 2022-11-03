
//const GroupUser = ;
const GroupUsers = [{"name":"Arthur","exp":82},{"name":"Thomas","exp":17},{"name":"Rat","exp":0}]
function GetTotal(){
    var total=0;
    for (let user of GroupUsers){
        total+=user.exp;
    }
    return total
}
function SetBalance(total){
    totalPerUser=total/GroupUsers.length

    for (let user of GroupUsers){
        var balance=0;
        balance=user.exp-totalPerUser;
        user["balance"]=balance;
    }
}
function YourCut(){
    PosUser=[];
    result=[];
    for (let user of GroupUsers){
        if(user.balance>0){
            PosUser.push(user)
        }
    }

    for (let PUser of PosUser){
        for (let user of GroupUsers){
            if(user.balance>=0){
                continue;
            }
            else{
                let temp=0;
                line ="";
                if (user.balance >= PUser.balance){
                    temp=PUser.balance;
                    user.balance=user.balance+temp;
                    PUser.balance=0;
                    line +=user.name +" doit " + temp +" à "+PUser.name;
                    result.push(line);
                    break;
                }
                else{
                    temp=-user.balance;
                    user.balance=0;
                    PUser.balance+=-temp;
                    line +=user.name +" doit " + temp +" à "+PUser.name;
                    result.push(line);
                }
            }
        }
    }
    return result;
}
function main(){
    total=GetTotal();
    SetBalance(total);
    transaction =YourCut();
    console.log(transaction)

}
main();