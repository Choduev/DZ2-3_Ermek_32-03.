//DZ-1
// var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
// var tagCount = {};
// for (var i = 0; i < tags.length; i++) {
//     var tag = tags[i];
//     tagCount[tag] = (tagCount[tag] || 0) + 1;
// }
//
// console.log(tagCount);

// dz-2
var Starbucks = {
    coffee:{
        americano: "Напиток, приготовленный пропусканием горячей воды под высоким давлением через молотые кофейные зерна.",
        latte: "Кофе с молоком, обычно подается с небольшим количеством молочной пены.",
        cappuccino: "Эспрессо с равными долями вспененного и подогретого молока.",
        mocha: "Эспрессо с горячим молоком, шоколадом и взбитыми сливками.",
    },
    tea: {
        greenTea: "Негашеный чай с легким вяжущим вкусом и зеленым оттенком.",
        blackTea: "Полностью окисленный чай с насыщенным вкусом и темным цветом.",
        chaiTea: "Пряный чай с смесью ароматных индийских специй и трав.",
        herbalTea: "Напиток на основе трав, фруктов, семян или корней, без чайного листа.",
    }
}
function takeOrder() {
    var beverageType = prompt("Выберите тип напитка: coffee или tea?")
    var itemName = prompt(`Выберите ${beverageType === "coffee" ? "coffee" : "tea"} из меню:`)

    if (Starbucks[beverageType] && Starbucks[beverageType][itemName]) {
        alert(`Заказ принят! Вы выбрали ${itemName}. Описание: ${Starbucks[beverageType][itemName]}`)
    } else {
        alert("Ошибка: Этот напиток отсутствует в меню.")
    }
}
takeOrder()
// function takeOrder(beverageType, itemName) {
//     beverageType = beverageType.toLowerCase();
//
//     if (Starbucks[beverageType] && Starbucks[beverageType][itemName]) {
//         alert(`Заказ принят! Вы выбрали  ${itemName}. Описание: ${Starbucks[beverageType][itemName]}`);
//     } else {
//         alert("Error: Этот напиток отсутствует в меню.")
//     }
// }



