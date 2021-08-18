function get(id){
    return document.getElementById(id)
}
const input = get('i');
const btn = get('b');
const dis = get('d');
btn.addEventListener('click',function(){
    var parse = input.value.split(',');
    var valid = parse.indexOf('')=== -1 ? true:false
    for(i in parse){
        parse[i] =  Number(parse[i])
        if (! parse[i]) valid = false;
    }
    if (valid){
        var len = parse.length
        a = 0;
        for(i in parse){
            a += parse[i]
        }
        var mean = a/len
        parse.sort(function(a, b) { // 오름차순
            return a - b;
        });
        if (len % 2 == 0){//짝수
            var median = (parse[len/2-1]+parse[len/2])/2
        }else var median = (parse[Math.floor(len/2)])
        const result = {};
        parse.forEach((x) => { 
            result[x] = (result[x] || 0)+1; 
        });
        var count = (result);
        console.log(count)
        var last = 0;
        var k = [];
        for (i in count){
            console.log(last,count[i])
            if (last<count[i]) {k = [i]; console.log('더크네?  바꾼다')}
            else if (last==count[i]) {k.push(i); console.log('같네?더해준다기')}
            if (last< count[i] ) last = count[i]
            console.log(k)
        }
        dis.innerHTML = `평균 : ${mean} 중앙값 : ${median} 최빈값 : ${k}`
    }    
    else dis.innerHTML = ('제대로 입력헤라 ㅂㅅ야(문자열,빈공간 넣지마)')
    
})
