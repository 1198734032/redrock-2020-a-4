//实现一个深拷贝函数，要考虑到“环”的情况，防止循环递归引用引起爆栈。

function myClone (target,map=new Map()) {
    let result;
    if(typeof target ==="object"){
        result=Array.isArray(target)?[]:{};
        if(map.get(target)){
            return map.get(target)
        }
        map.set(target,result)
        for (key in target){
            result[key]=myClone(target[key],map);
        }
    }else{
        result=target;
    }
    return result
}
