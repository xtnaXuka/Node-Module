function Circle(x,y,r){
    console.log('sda');
    function r_squared(){
        return Math.pow(r,2)
    }
    function area(){
        return Math.PI * r_squared();
    }
    return {
        area: area,
        squared: r_squared,
    }
}


module.exports = Circle;