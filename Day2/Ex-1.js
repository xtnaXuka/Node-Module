var date = new Date()
var datenow =date.toGMTString()
day = datenow.split(',')
if(day[0] == 'Wed'){
    console.log('Today is :Wednesday');
}
else if(day[0] == 'Mon'){
    
    console.log('Today is :Monday');
}
else if(day[0] == 'Thu'){

    console.log('Today is :Thurdsday');
}
else if(day[0] == 'Tue'){

    console.log('Today is :Tuesday');
}
else if(day[0] == 'Fri'){

    console.log('Today is :Friday');
}
else if(day[0] == 'Sat'){

    console.log('Today is :Saturday');
}
else if(day[0] == 'Sun'){

    console.log('Today is :Sunday');
}

console.log(`Current time is : ${date.getHours() > 13 ? date.getHours() - 12 : date.getHours() } ${date.getHours() > 12? 'PM' : 'AM'} : ${date.getMinutes()} : ${date.getSeconds()}`);